import { gql } from 'apollo-boost';

const RECIPES_BRANCH = process.env.REACT_APP_RECIPES_BRANCH || 'components';

// const tech = 'react';

// TODO: refactor params
const queryBuilder = (
  name: string,
  tech: string,
  target = '',
  query: string,
  expression = `cookbook-${tech}/recipes`
  // eslint-disable-next-line max-params
) => {
  console.log(`
    query ${name} {
      repository(owner: "wolox", name: "frontend-cookbook") {
        object(expression: "${RECIPES_BRANCH}:${expression}${target}") {
          ${query}
        }
      }
    }
  `);
  return gql`
  query ${name} {
    repository(owner: "wolox", name: "frontend-cookbook") {
      object(expression: "${RECIPES_BRANCH}:${expression}${target}") {
        ${query}
      }
    }
  }
`;
};

const filesQuery = `
  ... on Tree {
    entries {
      name
      object {
        ... on Blob {
          text
        }
      }
    }
  }`;

export const getTechsAndCategories = () =>
  queryBuilder(
    'getTechsAndCategories',
    '',
    '',
    `... on Tree {
        entries {
          name
          oid
          object {
            ... on Tree {
              id
              entries {
                name
                object {
                  ... on Tree {
                    entries {
                      name
                    }
                  }
                }
              }
            }
          }
        }
     }`,
    ''
  );

// export const getCategories = (tech: string) =>
//   queryBuilder('getCategories', tech, '', '... on Tree {entries {name oid} }', '');

export const getCategories = (tech: string) =>
  queryBuilder(
    'getCategories',
    tech,
    '',
    `
    ... on Tree {
      entries {
        name
        oid
        object {
          ... on Tree {
            entries {
              name
              object {
                ... on Tree {
                  entries {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }`,
    ''
  );

export const getRecipeFiles = (tech: string, recipeType: string, recipe: string) =>
  queryBuilder('recipesFiles', tech, `/${recipeType}/${recipe}`, filesQuery);

export const getAllRecipesByCategory = (tech: string, category: string) =>
  queryBuilder(
    'recipesByCategory',
    tech,
    `/${category}`,
    `
    ... on Tree {
      entries {
        name
        object {
          ${filesQuery}
        }
      }
    }`
  );
