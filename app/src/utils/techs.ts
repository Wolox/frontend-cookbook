import { uniq, flatten, entries } from 'lodash';

import { Categories } from '~components/Sidebar/interface';

import { COOKBOOK_PREFIX, RECIPES_DIRECTORY, SRC_DIRECTORY } from './queries';

interface Directory {
  oid?: string;
  name: string;
  object?: {
    entries: Directory[];
  }
}

export interface TechsResult {
  repository: {
    object: {
      entries: Directory[];
    };
  }
}

export const parseTechs = (data: TechsResult) =>
  data.repository.object.entries
    .filter(entry => entry.name.startsWith(COOKBOOK_PREFIX))
    .map(cookbook => ({
      name: cookbook.name.substring(COOKBOOK_PREFIX.length),
      categories: cookbook.object?.entries
        .find(entry => entry.name === RECIPES_DIRECTORY)
        ?.object?.entries.map(entry => entry.name)
    }));

const getSubdir = (dir: Directory, subDir: string) => {
  const recipesDir = dir.object?.entries.find(entry => entry.name === subDir);
  return recipesDir?.object?.entries.map(entry => entry.name);
}

export const parseCategories = (data: TechsResult) =>
  uniq(
    flatten(
      data.repository.object.entries
        .filter(entry => entry.name.startsWith(COOKBOOK_PREFIX))
        .map(cookbook =>
          {
            const recipesDir = getSubdir(cookbook, RECIPES_DIRECTORY);
            if (recipesDir) {
              return recipesDir;
            }

            const srcDir = cookbook.object?.entries.find(entry => entry.name === SRC_DIRECTORY);
            return srcDir && getSubdir(srcDir, RECIPES_DIRECTORY);
          }
        )
    ).filter(category => !!category) as string[]
  );
