import React, { useEffect } from 'react';

import { COLORS } from './constants';
import styles from './styles.module.scss';

interface Props {
  component: {
    title: string,
    html: string,
    css: string
  },
  number: number,
  category: string
}

function Card({ component, number }: Props) {
  useEffect(() => {
    const elem = document.querySelector(`#${component.title}`);
    const shadowRoot = elem?.attachShadow({ mode: 'open' });
    if (shadowRoot) {
      shadowRoot.innerHTML = `${component.html}<style>${component.css}</style>`;
    };
  }, [component.css, component.html, component.title]);

  const cardColor = { '--card-color': COLORS[Math.floor(number % COLORS.length)] } as React.CSSProperties;
  return (
    <div className={`column middle center full-width ${styles.card}`} style={cardColor}>
      <div className={`full-width row middle center ${styles.cardContent}`} id={component.title} />
      <div className={`full-width column ${styles.cardInfo}`}>
        <h4 className={`m-bottom-2 ${styles.cardTitle}`}>{component.title}</h4>
        <a className={styles.cardButton} href="">Watch more...</a>
      </div>
    </div>
  );
}

export default Card;
