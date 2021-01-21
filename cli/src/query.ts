export function query(tech: string, category: string, recipe: string) {
  return `
  query recipesFiles {
    repository(owner: "wolox", name: "frontend-cookbook") {
      object(expression: "master:cookbook-${tech}/${tech === 'react' ? 'src/' : ''}recipes/${category}/${recipe}") {
        
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
