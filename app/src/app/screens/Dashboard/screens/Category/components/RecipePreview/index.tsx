import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Recipe } from '~constants/interfaces/recipe';

import ShadowRecipe from '../ShadowRecipe';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  recipe: Recipe;
  thumbnail?: boolean;
}

function RecipePreview({ className, recipe, thumbnail }: Props) {
  const preview = thumbnail ? recipe.config.thumbnail : recipe.config.detail;

  if (preview) {
    if (preview.type === 'iframe' || preview.type === 'img') {
      const Elem = preview.type;
      return (
        <div className={`full-width row middle center ${className}`}>
          <Elem src={preview.url} className={`full-width row middle center ${styles.cardIframe}`} />
        </div>
      );
    }

    return null;
  }

  if (recipe.readme) {
    return (
      <ReactMarkdown
        className={`full-width column ${className} ${styles.cardReadme}`}
        source={recipe.readme.content}
      />
    );
  }

  return <ShadowRecipe recipe={recipe} className={`full-width row middle center ${className}`} />;
}

export default RecipePreview;
