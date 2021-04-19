/* eslint-disable @typescript-eslint/naming-convention */
import fetch, { Response } from 'node-fetch';
import { promises as fs } from 'fs';

import { Recipe } from './recipe';
import StatusCodes from './status-codes';

type RecipeFile = {
  type: 'file';
  name: string;
  download_url: string;
};

type RecipeDir = {
  type: 'dir';
  name: string;
  path: string;
};

type RecipeNode = RecipeFile | RecipeDir;

const COOKBOOK_BASE_URL =
  'https://api.github.com/repos/Wolox/frontend-cookbook/contents';

const COOKBOOK_FOLDERS_EXCEPTIONS: Record<string, string> = {
  react: 'cookbook-react/src/recipes'
};
const getCookbookUrl = (tech: string) =>
  COOKBOOK_FOLDERS_EXCEPTIONS[tech] || `cookbook-${tech}/recipes`;

const handleResponseError = (
  response: Response,
  errorMessages: () => { notFoundError?: string; clientError?: string }
) => {
  if (response.status === StatusCodes.NOT_FOUND) {
    throw new Error(errorMessages().notFoundError);
  } else if (
    response.status < StatusCodes.OK ||
    response.status > StatusCodes.MAX_CLIENT_ERROR
  ) {
    throw new Error(errorMessages().clientError);
  }
};

const importFile = async (file: RecipeFile, currentDir = '') => {
  // TODO: Support non text files
  const response = await fetch(file.download_url, {
    headers: { 'Content-Type': 'application/text' }
  });

  handleResponseError(response, () => ({
    notFoundError: `The file with name '${file.name}' could not be found`,
    clientError: `The following error has occurred requesting the file ${
      file.name
    }: \n ${response.json()}`
  }));

  await fs.writeFile(`./${currentDir}/${file.name}`, await response.text());
};

export async function fetchRecipe(
  recipe: Recipe,
  currentDir?: string
): Promise<void> {
  if (currentDir) {
    await fs.mkdir(`.${currentDir}`, { recursive: true });
  }

  const response = await fetch(
    `${COOKBOOK_BASE_URL}/${getCookbookUrl(recipe.tech)}/${recipe.category}/${
      recipe.name
    }${currentDir || ''}`
  );

  handleResponseError(response, () => ({
    notFoundError: `A recipe with name '${recipe.name}' and category '${recipe.category}' could not be found in cookbook-${recipe.tech}`,
    clientError: `The following error has occured requesting ${
      recipe.name
    }: \n ${response.json()}`
  }));

  const recipeResponse = await (response.json() as Promise<RecipeNode[]>);

  await Promise.all(
    recipeResponse.map((file) => {
      switch (file.type) {
        case 'file':
          return importFile(file, currentDir);
        case 'dir':
          return fetchRecipe(recipe, `${currentDir || ''}/${file.name}`);
        // no default
      }
      throw new Error(`Unknown file type ${(file as any).type}`);
    })
  );
}
