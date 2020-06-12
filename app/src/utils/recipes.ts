import { GitHubResult } from '~constants/interfaces/recipe';

const getRecipeByFileName = (recipe: GitHubResult, fileName: string) => {
  const file = recipe.object.entries.find(entry => entry.name === fileName);
  return file
    ? {
        name: file.name,
        content: file.object.text
      }
    : null;
};

export const getRecipeCode = (recipe: GitHubResult) =>
  recipe
    ? {
        title: recipe.name,
        tech: recipe.tech,
        config: JSON.parse(
          recipe.object.entries.find(entry => entry.name === 'cookbook.json')?.object.text || '{}'
        ),
        gif: getRecipeByFileName(recipe, 'recipe.gif'),
        readme: getRecipeByFileName(recipe, 'readme.md'),
        html: getRecipeByFileName(recipe, 'index.html'),
        css: getRecipeByFileName(recipe, 'styles.css'),
        scss: getRecipeByFileName(recipe, 'styles.scss')
      }
    : {};

export const getRecipesCode = (recipes: GitHubResult[]) =>
  recipes?.length ? recipes.map(getRecipeCode) : [];
