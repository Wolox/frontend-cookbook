import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { getAllRecipesByCategory } from '~utils/queries';
import { getRecipesCode } from '~utils/recipes';
import { useGlobalContext } from '~context/GlobalProvider';

import CardsContainer from './components/CardsContainer';

function Category() {
  const { category } = useParams();
  const {
    state: { tech }
  } = useGlobalContext();
  const { loading, data } = useQuery(getAllRecipesByCategory(tech, category as string));
  const recipes = getRecipesCode(data?.repository.object?.entries);
  return (
    <>
      <h2 className="m-bottom-6 title">{category}</h2>
      <CardsContainer loading={loading} recipes={recipes} category={category} />
    </>
  );
}

export default Category;
