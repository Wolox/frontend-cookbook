var graph = require("graphql.js")

const createQuery = (componentType, component, filename) => `
query {
  repository(owner: "Wolox", name: "frontend-cookbook") {
    content: object(expression: "components:${componentType}/${component}/${filename}") {
      ... on Blob {
        text
      }
    }
  } 
}`

export const getComponentFile = (componentType, component, filename) => {
  fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'bearer 368a85124945966be81bfab981835ad4c27cd9bd'
    },
    body: JSON.stringify({query: createQuery(componentType, component, filename)})
  })
    .catch(e => {
      console.log(e);
      return null;
    }) // TODO: add error handler.
    .then(r => r.json())
    .then(data => console.log('data returned:', data));
}

/*

const getHtml = graph(baseQuery);

const getFiles = _ => {
  getHtml().then(test => console.log(test)).catch(err => console.log('err', err));
  const html = getHtml();
  console.log(html());
}

getFiles();
*/