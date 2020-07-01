import { GitHubResult, FileTypes, TreeEntry } from '~constants/interfaces/recipe';

const getRecipeByFileName = (recipe: GitHubResult, fileName: string) => {
  const file = recipe.object.entries.find(entry => entry.name.toLowerCase() === fileName);
  return file
    ? {
        name: file.name,
        content: file.object.text
      }
    : null;
};

const parseAndSortTree = (entries: any) => {
  const newSource = entries.map((entry: any) =>
    entry.object.__typename === FileTypes.tree // eslint-disable-line no-underscore-dangle
      ? {
          name: entry.name,
          type: FileTypes.tree,
          entries: parseAndSortTree(entry.object.entries)
        }
      : {
          name: entry.name,
          type: FileTypes.blob,
          id: entry.object.id,
          src: entry.object.text,
          isBinary: entry.object.isBinary
        }
  );
  return newSource.sort((entryA: TreeEntry, entryB: TreeEntry) => entryA.type < entryB.type);
};

const COOKBOOK_JSON = 'cookbook.json';

const filterBlobEntries = (entries: any) =>
  entries.filter((entry: TreeEntry) => {
    if (entry.type === FileTypes.tree) {
      filterBlobEntries(entry.entries);
    } else if (entry.name === COOKBOOK_JSON) {
      return false;
    }
    return true;
  });

const parseFilterAndSort = (entries: any) => {
  const parsedAndSortEntries = parseAndSortTree(entries);
  const filteredEntries = filterBlobEntries(parsedAndSortEntries);
  return filteredEntries;
};

export const getRecipeCode = (recipe: GitHubResult) =>
  recipe
    ? {
        title: recipe.name,
        tech: recipe.tech,
        config: JSON.parse(
          recipe.object.entries.find(entry => entry.name === COOKBOOK_JSON)?.object.text || '{}'
        ),
        readme: getRecipeByFileName(recipe, 'readme.md'),
        source: { entries: parseFilterAndSort(recipe.object.entries) },
        // TODO: Remove this once RecipePreview is updated with the new files structure
        html: getRecipeByFileName(recipe, 'index.html'),
        css: getRecipeByFileName(recipe, 'styles.css'),
        scss: getRecipeByFileName(recipe, 'styles.scss')
      }
    : {};

export const getRecipesCode = (recipes: GitHubResult[]) =>
  recipes?.length ? recipes.map(getRecipeCode) : [];
