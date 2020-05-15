import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Recipe } from '~constants/interfaces/component';

import ShadowComponent from '../ShadowComponent';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  component: Recipe;
  thumbnail?: boolean;
}

function RecipePreview({ className, component, thumbnail }: Props) {
  const componentUrl = thumbnail ? component.config.thumbnailURL : component.config.detailURL;
  if (componentUrl) {
    return (
      <div className={`full-width row middle center ${className}`}>
        <iframe src={componentUrl} className={`full-width row middle center ${styles.cardIframe}`} />
      </div>
    );
  }

  if (component.readme) {
    return (
      <ReactMarkdown
        className={`full-width column ${className} ${styles.cardReadme}`}
        source={component.readme.content}
      />
    );
  }

  return <ShadowComponent component={component} className={`full-width row middle center ${className}`} />;
}

export default RecipePreview;
