import {Recipe} from './recipe'
import fetch from 'node-fetch'
const fs = require('fs').promises

type RecipeFile ={
  type: 'file';
  name: string;
  download_url: string;
}

type RecipeDir = {
  type: 'dir';
  name: string;
  path: string;
}

type RecipeNode = RecipeFile | RecipeDir

const COOKBOOK_BASE_URL = 'https://api.github.com/repos/Wolox/frontend-cookbook/contents'

const COOKBOOK_FOLDERS_EXCEPTIONS: Record<string, string> = {
  react: 'cookbook-react/src/recipes',
}
const getCookbookUrl = (tech: string) => (COOKBOOK_FOLDERS_EXCEPTIONS[tech] || `cookbook-${tech}/recipes`)

const importFile = async (file: RecipeFile, currentDir = '') => {
  // TODO: Support non text files
  const response = await fetch(file.download_url, {
    headers: {'Content-Type': 'application/text'},
  })

  if (response.status === 404) {
    throw new Error(`The file with name '${file.name}' could not be found`)
  } else if (response.status < 200 || response.status > 299) {
    throw new Error(`The following error has occured requesting the file ${file.name}: \n ${response.json()}`)
  }

  await fs.writeFile(`./${currentDir}/${file.name}`, await response.text())
}

export async function fetchRecipe(recipe: Recipe, currentDir?: string): Promise<void> {
  if (currentDir) {
    await fs.mkdir('.' + currentDir, {recursive: true})
  }

  const response = await fetch(`${COOKBOOK_BASE_URL}/${getCookbookUrl(recipe.tech)}/${recipe.category}/${recipe.name}${currentDir || ''}`)

  if (response.status === 404) {
    throw new Error(`A recipe with name '${recipe.name}' and category '${recipe.category}' could not be found in cookbook-${recipe.tech}`)
  } else if (response.status < 200 || response.status > 299) {
    throw new Error(`The following error has occured requesting ${recipe.name}: \n ${response.json()}`)
  }
  const recipeResponse = await (response.json() as Promise<RecipeNode[]>)

  await Promise.all(recipeResponse.map(file => {
    switch (file.type) {
    case 'file':
      return importFile(file, currentDir)
    case 'dir':
      return fetchRecipe(recipe, `${currentDir || ''}/${file.name}`)
    }
    throw new Error(`Unknow file type ${(file as any).type}`)
  }))
}
