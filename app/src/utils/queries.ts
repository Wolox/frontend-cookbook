import { gql } from 'apollo-boost';

const RECIPES_BRANCH = process.env.REACT_APP_RECIPES_BRANCH || 'components';

// const tech = 'react';

const queryBuilder = (name: string, tech: string, target = '', query: string) => gql`
  query ${name} {
    repository(owner: "wolox", name: "frontend-cookbook") {
      object(expression: "${RECIPES_BRANCH}:recipes-${tech}/components${target}") {
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

export const getCategories = (tech: string) =>
  queryBuilder('getCategories', tech, '', '... on Tree {entries {name oid} }');

export const getRecipeFiles = (tech: string, recipeType: string, recipe: string) =>
  queryBuilder('recipesFiles', tech, `/${recipeType}/${recipe}`, filesQuery);

export const getAllRecipesByCategory = (tech: string, category: string) =>
  queryBuilder(
    'recipesByCategory',
    tech,
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
