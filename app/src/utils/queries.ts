import { gql } from 'apollo-boost';

const RECIPES_BRANCH = process.env.REACT_APP_RECIPES_BRANCH;
export const COOKBOOK_PREFIX = 'cookbook-';
export const RECIPES_DIRECTORY = 'recipes';

interface QueryBuilderOptions {
  tech?: string;
  target?: string;
  expression?: string;
}

const getExpression = (tech: string) => {
  if (!tech) {
    return '';
  }
  const techRoot = `${COOKBOOK_PREFIX}${tech}`;

  // TODO: Check if there's a way we could avoid this. At the moment we need it because the test
  // script in CRA needs all tests to be inside the src dir
  return tech === 'react' ? `${techRoot}/src/${RECIPES_DIRECTORY}` : `${techRoot}/${RECIPES_DIRECTORY}`;
};

const queryBuilder = (
  name: string,
  query: string,
  { tech = '', target = '', expression = getExpression(tech) }: QueryBuilderOptions = {}
) =>
  gql`
  query ${name} {
    repository(owner: "wolox", name: "frontend-cookbook") {
      object(expression: "${RECIPES_BRANCH}:${expression}${target}") {
        ${query}
      }
    }
  }
`;

// TODO: Change the length of this query
const filesQuery = `
... on Blob {
  id
  isBinary
  text
}
... on Tree {
  entries {
    name
    object {
      ... on Blob {
        id
        text
        isBinary
      }
      ... on Tree {
        entries {
          name
          object {
            ... on Blob {
              id
              text
              isBinary
            }
            ... on Tree {
              entries {
                name
                object {
                  ... on Blob {
                    id
                    text
                    isBinary
                  }
                  ... on Tree {
                    entries {
                      name
                      object {
                        ... on Blob {
                          id
                          isBinary
                          text
                        }
                        ... on Tree {
                          entries {
                            name
                            object {
                              ... on Blob {
                                id
                                isBinary
                                text
                              }
                              ... on Tree {
                                entries {
                                  name
                                  object {
                                    ... on Blob {
                                      id
                                      isBinary
                                      text
                                    }
                                    ... on Tree {
                                      entries {
                                        name
                                        object {
                                          ... on Blob {
                                            id
                                            isBinary
                                            text
                                          }
                                          ... on Tree {
                                            entries {
                                              name
                                              object {
                                                ... on Blob {
                                                  id
                                                  isBinary
                                                  text
                                                }
                                                ... on Tree {
                                                  entries {
                                                    name
                                                    object {
                                                      ... on Blob {
                                                        id
                                                        isBinary
                                                        text
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;

export const getCategoriesAndTechs = () =>
  queryBuilder(
    'getCategories',
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
    }`
  );

export const getRecipeFiles = (tech: string, recipeType: string, recipe: string) =>
  queryBuilder('recipesFiles', filesQuery, {
    tech,
    target: `/${recipeType}/${recipe}`
  });

export const getAllRecipesByCategory = (tech: string, category: string) =>
  queryBuilder(
    'recipesByCategory',
    `
    ... on Tree {
      entries {
        name
        object {
          ${filesQuery}
        }
      }
    }`,
    { tech, target: `/${category}` }
  );
