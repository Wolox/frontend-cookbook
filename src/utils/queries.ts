import { gql } from 'apollo-boost';

const COMPONENTS_BRANCH = process.env.REACT_APP_COMPONENTS_BRANCH || 'components';

const queryBuilder = (name: string, target = '', query: string) => gql`
  query ${name} {
    repository(owner: "wolox", name: "frontend-cookbook") {
      object(expression: "${COMPONENTS_BRANCH}:components${target}") {
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
