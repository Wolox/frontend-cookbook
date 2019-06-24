import api from '../config/api'

const createQuery = (target = '', query) => `
query {
  repository(owner: "Wolox", name: "frontend-cookbook") {
    content: object(expression: "components${target}") {
      ${query}
    }
  }
}`

const componentFileQuery = (componentType, component, filename) =>
  createQuery(`:${componentType}/${component}/${filename}`, `
    ... on Blob {
      text
    }`
  )

export async function getComponentFiles(componentType, component) {
  const [htmlResponse, scssResponse] = await Promise.all([
    api.post('', { query: componentFileQuery(componentType, component, 'index.html') }),
    api.post('', { query: componentFileQuery(componentType, component, 'styles.scss') })
  ])
  return {
    html: htmlResponse.data.data.repository.content.text,
    scss: scssResponse.data.data.repository.content.text
  }
}
