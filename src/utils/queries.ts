import { gql } from 'apollo-boost';

const RECIPES_BRANCH = process.env.REACT_APP_RECIPES_BRANCH || 'components';

const queryBuilder = (name: string, target = '', query: string) => gql`
  query ${name} {
    repository(owner: "wolox", name: "frontend-cookbook") {
      object(expression: "${RECIPES_BRANCH}:components${target}") {
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

export const getRecipeFiles = (recipeType: string, recipe: string) =>
  queryBuilder('recipesFiles', `/${recipeType}/${recipe}`, filesQuery);

export const getAllRecipesByCategory = (category: string) =>
  queryBuilder(
    'recipesByCategory',
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
