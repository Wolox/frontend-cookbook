import React from 'react';
import ReactMarkdown from 'react-markdown';
import cn from 'classnames';

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
          <Elem
            src={preview.url}
            className={cn('full-width', 'row', 'middle', 'center', styles[`card-${preview.type}`], {
              [styles.cardThumbnailIframe]: preview.type === 'iframe' && thumbnail
            })}
          />
        </div>
      );
    }

    return null;
  }

  if (recipe.readme) {
    return (
      <ReactMarkdown
        className={`full-width column markdown-container ${className} ${styles.cardReadme}`}
        source={recipe.readme.content}
        escapeHtml={false}
      />
    );
  }

  if (recipe.html && recipe.css) {
    return <ShadowRecipe recipe={recipe} className={`full-width row middle center ${className}`} />;
  }

  // The recipe is still usable but we wan't to warn the user
  // eslint-disable-next-line no-console
  console.warn(`Cookbook.json or README.md file is missing for recipe ${recipe.title}`);
  return <div className={`full-width column markdown-container ${className} ${styles.cardReadme}`} />;
}

export default RecipePreview;
