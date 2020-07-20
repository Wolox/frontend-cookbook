import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Routes from '~constants/routes';
import { Recipe } from '~constants/interfaces/recipe';

import RecipePreview from '../RecipePreview/index';

import { COLORS, DEFAULT_COLOR } from './constants';
import styles from './styles.module.scss';

interface Props {
  recipe: Recipe;
  number: number;
  category: string;
}

function Card({ recipe, number }: Props) {
  const { category } = useParams();
  const linkRoute = Routes.DETAIL.replace(':category', category as string)
    .replace(':recipe', recipe.title)
    .replace(':tech', recipe.tech);

  const cardColor = {
    '--card-color': recipe.config.thumbnail ? DEFAULT_COLOR : COLORS[Math.floor(number % COLORS.length)]
  } as React.CSSProperties;

  return (
    // eslint-disable-next-line react/forbid-dom-props
    <div className={`column middle center full-width ${styles.card}`} style={cardColor}>
      <span className={styles.techTag}>{recipe.tech}</span>
      <RecipePreview thumbnail recipe={recipe} className={styles.cardContent} />
      <div className={`full-width column ${styles.cardInfo}`}>
        <h4 className={`m-bottom-2 ${styles.cardTitle}`}>{recipe.title}</h4>
        <Link to={linkRoute} className={styles.linkDetail}>
          Ver más
        </Link>
      </div>
    </div>
  );
}

export default Card;
