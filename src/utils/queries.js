import { gql } from 'apollo-boost';

const queryBuilder = (name, target = '', query) => gql`
  query ${name} {
    repository(owner: "wolox", name: "frontend-cookbook") {
      object(expression: "components:components${target}") {
        ${query}
      }
    }
  }
`;

export const getCategories = () => queryBuilder('getCategories', '', '... on Tree {entries {name oid} }');
