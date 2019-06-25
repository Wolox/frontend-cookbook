import api from '../config/api'

const queryBuild = (name, target = '', query) => ({
  query: `
    query ${name} {
      repository(owner: "Wolox", name: "frontend-cookbook") {
        object(expression: "components${target}") {
          ${query}
        }
      }
    }`
  })

export const getComponentFiles = (componentType, component) =>
  api.post('', queryBuild('componentsFiles', `:${componentType}/${component}`, `
    ... on Tree {
      entries {
        ... on TreeEntry {
          name
          object {
            ... on Blob {
              text
            }
          }
        }
      }
    }`))

export const getAllComponentsByCategory = category =>
  api.post('', queryBuild('componentsByCategory', `:${category}`, `
    ... on Tree {
      entries {
        name
        object {
          ... on Tree {
            entries {
              ... on TreeEntry {
                name
                object {
                  ... on Blob {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }`))

export const getCategories = async () => {
  const response = await api.post('', queryBuild(`getCategories`, '', `
    ... on Commit {
      tree {
        entries {
          name
        }
      }
    }`))
  return response.data.data.repository.object.tree.entries.filter(file => file.name[0] !== '.')
}
