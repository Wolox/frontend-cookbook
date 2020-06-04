import { uniq, flatten } from 'lodash';

import { Categories } from '~components/Sidebar/interface';

import { COOKBOOK_PREFIX, RECIPES_DIRECTORY } from './queries';

export interface TechsResult {
  repository: {
    object: {
      entries: {
        name: string;
        object: {
          entries: {
            name: string;
            object: {
              entries: Categories[];
            };
          }[];
        };
      }[];
    };
  };
}

export const parseTechs = (data: TechsResult) =>
  data.repository.object.entries
    .filter(entry => entry.name.startsWith(COOKBOOK_PREFIX))
    .map(cookbook => ({
      name: cookbook.name.substring(COOKBOOK_PREFIX.length),
      categories: cookbook.object.entries
        .find(entry => entry.name === RECIPES_DIRECTORY)
        ?.object.entries.map(entry => entry.name)
    }));

export const parseCategories = (data: TechsResult) =>
  uniq(
    flatten(
      data.repository.object.entries
        .filter(entry => entry.name.startsWith(COOKBOOK_PREFIX))
        .map(cookbook =>
          cookbook.object.entries
            .find(entry => entry.name === RECIPES_DIRECTORY)
            ?.object.entries.map(entry => entry.name)
        )
    ).filter(category => !!category) as string[]
  );
