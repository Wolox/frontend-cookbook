import { gql } from 'apollo-boost';

// TODO: Update components-react-dev-and-config when merged. Maybe extract this branch reference?

const queryBuilder = (name: string, target = '', query: string) => gql`
  query ${name} {
    repository(owner: "wolox", name: "frontend-cookbook") {
      object(expression: "components-react-dev-and-config:components${target}") {
        ${query}
      }
    }
  }
`;

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

export const getCategories = () => queryBuilder('getCategories', '', '... on Tree {entries {name oid} }');

export const getAllComponentsByCategory = (category: string) =>
  queryBuilder(
    'componentsByCategory',
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
