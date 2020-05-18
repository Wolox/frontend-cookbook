import React from 'react';

import { withSpinner } from '~components/Spinner';

import Card from '../Card';

import styles from './styles.module.scss';
import { CardsContainerProps } from './interface';

function CardsContainer({ recipes, category }: CardsContainerProps) {
  return (
    <div className={styles.cardContainer}>
      {!!recipes?.length &&
        recipes.map((recipe, index) => (
          <Card key={recipe.title} number={index} recipe={recipe} category={category} />
        ))}
    </div>
  );
}

export default withSpinner({
  WrappedComponent: CardsContainer,
  typeLoading: 'wandering-cubes',
  colorSpinner: '#002363',
  classNameContainer: '',
  classNameLoading: styles.loaderContainer
});
