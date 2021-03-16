import {Recipe} from './recipe'

export function query({tech, category, name}: Recipe) {
  return `
  query recipesFiles {
    repository(owner: "wolox", name: "frontend-cookbook") {
      object(expression: "master:cookbook-${tech}/${tech === 'react' ? 'src/' : ''}recipes/${category}/${name}") {
        
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
}
      }
    }
  }

  `
}
