import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { getAllComponentsByCategory } from '~utils/queries';
import { getComponentsCode } from '~utils/components';

import CardsContainer from './components/CardsContainer';

function Category() {
  const { category } = useParams();
  const { loading, data } = useQuery(getAllComponentsByCategory(category as string));
  const components = getComponentsCode(data?.repository.object?.entries);
  return (
    <>
      <h2 className="m-bottom-6 title">{category}</h2>
      <CardsContainer loading={loading} components={components} category={category} />
    </>
  );
}

export default Category;
