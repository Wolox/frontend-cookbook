import {Recipe} from './recipe'
import fetch from 'node-fetch'
const fs = require('fs').promises

type RecipeFile = {
  name: string;
  type: 'file' | 'dir';
  download_url: string;
}

const importFile = async (file: RecipeFile) => {
  // TODO: What happens when the file isn't a text :thinking-face:
  const response = await fetch(file.download_url, {
    headers: {'Content-Type': 'application/text'},
  })
  return fs.writeFile(`./${file.name}`, await response.text())
}

const importDirectory = async (file: RecipeFile) => {
  const filePath = `./${file.name}`
  await fs.mkdir(filePath, {recursive: true})
  return null
  // return getDir(`${BASE_URL}/${recipeData.path}`, filePath)
}

export async function fetchRecipe(recipe: Recipe) {
  const res = await fetch(`https://api.github.com/repos/Wolox/frontend-cookbook/contents/cookbook-react/src/recipes/${recipe.category}/${recipe.name}`)

  if (res.status === 404) {
    throw new Error(`A recipe with name '${recipe.name}' and category '${recipe.category}' could not be found in cookbook-${recipe.tech}`)
  } else if (res.status < 200 || res.status > 299) {
    throw new Error(`The following error has occured requesting ${recipe.name}: \n ${res.json()}`)
  }
  const recipeResponse = await (res.json() as Promise<RecipeFile[]>)

  return Promise.all(recipeResponse.map(file => {
    if (file.type === 'file') {
      return importFile(file)
    }
    return importDirectory(file)
  }))
}
