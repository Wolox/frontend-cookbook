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
  const { loading: loadingWeb, data: dataWeb } = useQuery(
    getAllRecipesByCategory('web', category as string),
    { skip: tech === 'react' }
  );
  const { loading: loadingReact, data: dataReact } = useQuery(
    getAllRecipesByCategory('react', category as string),
    { skip: tech === 'web' }
  );

  const recipesWeb = getRecipesCode(
    dataWeb?.repository.object?.entries.map((entry: any) => ({ ...entry, tech: 'web' }))
  );
  const recipesReact = getRecipesCode(
    dataReact?.repository.object?.entries.map((entry: any) => ({ ...entry, tech: 'react' }))
  );

  const recipes = !(loadingWeb || loadingReact) && [...(recipesWeb || []), ...(recipesReact || [])];
  return (
    <>
      <h2 className="m-bottom-6 title">{category}</h2>
      <CardsContainer loading={loadingWeb || loadingReact} recipes={recipes} category={category} />
    </>
  );
}

export default Category;
