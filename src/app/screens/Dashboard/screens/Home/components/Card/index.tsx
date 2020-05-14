/* eslint-disable react/no-multi-comp */
/* eslint-disable react/forbid-dom-props */
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import { Recipe } from '../../interface';

import { COLORS } from './constants';
import styles from './styles.module.scss';

interface Props {
  component: Recipe;
  number: number;
  category: string;
}

function Card({ component, number }: Props) {
  useEffect(() => {
    if (!component.config.thumbnailURL) {
      const elem = document.querySelector(`#${component.title}`);
      const shadowRoot = elem?.attachShadow({ mode: 'open' });
      if (shadowRoot) {
        shadowRoot.innerHTML = `${component.html}<style>${component.css}</style>`;
      }
    }
  }, [component.config.thumbnailURL, component.css, component.html, component.title]);

  const renderRecipe = () => {
    if (component.config.thumbnailURL) {
      return (
        <div className={`full-width row middle center ${styles.cardContent}`}>
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
          className={`full-width column ${styles.cardContent} ${styles.cardReadme}`}
          source={component.readme}
        />
      );
    }

    return <div className={`full-width row middle center ${styles.cardContent}`} id={component.title} />;
  };

  const cardColor = { '--card-color': COLORS[Math.floor(number % COLORS.length)] } as React.CSSProperties;
  return (
    <div className={`column middle center full-width ${styles.card}`} style={cardColor}>
      {renderRecipe()}
      <div className={`full-width column ${styles.cardInfo}`}>
        <h4 className={`m-bottom-2 ${styles.cardTitle}`}>{component.title}</h4>
        <Link to="/">Watch more...</Link>
      </div>
    </div>
  );
}

export default Card;
