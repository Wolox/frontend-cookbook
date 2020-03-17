import React from 'react';

import { COLORS } from './constants';
import styles from './styles.module.scss';

interface Props {
  component: {
    title: string,
  },
  number: number,
  category: string
}

function Card({ component, number }: Props) {
  const cardColor = {'--card-color': COLORS[Math.floor(number % COLORS.length)]} as React.CSSProperties;;
  return (
    <div className={`column middle center full-width ${styles.card}`} style={cardColor}>
      <h2>{component.title}</h2>
    </div>
  );
}

export default Card;
