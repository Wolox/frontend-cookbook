import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Recipe } from '~constants/interfaces/component';

import ShadowComponent from '../ShadowComponent';

import styles from './styles.module.scss';

interface Props {
  className: string;
  component: Recipe;
}

function Thumbnail({ className, component }: Props) {
  if (component.config.thumbnailURL) {
    return (
      <div className={`full-width row middle center ${className}`}>
        <iframe
          src={component.config.thumbnailURL}
          className={`full-width row middle center ${styles.cardIframe}`}
        />
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

export default Thumbnail;
