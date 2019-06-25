import api from '../config/api'

const queryBuilder = (name, target = '', query) => ({
  query: `
    query ${name} {
      repository(owner: "wolox", name: "frontend-cookbook") {
        object(expression: "components${target}") {
          ${query}
        }
      }
    }`
  })

const filesQuery = `
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
  }`

export const getComponentFiles = async (componentType, component) => {
  const response = await api.post('', queryBuilder('componentsFiles', `:${componentType}/${component}`, filesQuery))
  return response.data.data.repository.object.entries
}

export const getAllComponentsByCategory = async category => {
  const response = await api.post('', queryBuilder('componentsByCategory', `:${category}`, `
    ... on Tree {
      entries {
        name
        object {
          ${filesQuery}
        }
      }
    }`))
    return response.data.data.repository.object.entries
  }

export const getCategories = async () => {
  const response = await api.post('', queryBuilder(`getCategories`, '', `
    ... on Commit {
      tree {
        entries {
          name
        }
      }
    }`))
  return response.data.data.repository.object.tree.entries.filter(file => file.name[0] !== '.')
}
