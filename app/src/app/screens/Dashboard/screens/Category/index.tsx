import React from 'react';
import { useParams } from 'react-router-dom';

import { useGlobalContext } from '~context/GlobalProvider';

import CardsContainer from './components/CardsContainer';
import useRecipesQuery from './useRecipesQuery';
import styles from './styles.module.scss';

function Category() {
  const { category } = useParams();
  const {
    state: { tech: selectedTech }
  } = useGlobalContext();
  const { loading, data } = useRecipesQuery(selectedTech, category);

  return (
    <div className={styles.mainContainer}>
      <h2 className="m-bottom-6 title">{category}</h2>
      <CardsContainer loading={loading} recipes={data} category={category} />
    </div>
  );
}

export default Category;
