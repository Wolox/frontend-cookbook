import React from 'react';

import Card from './components/Card';

import styles from './styles.module.scss';

interface Props {
  title: string,
  components: Array<{
    title: string
  }>
}

function Feed({ title, components }: Props) {
  return (
    <div className={`full-width ${styles.feedContent}`}>
      <h2>{title}</h2>
      <div className={styles.cardContainer}>
        {components && components.map((comp, index) => <Card key={comp.title} number={index} component={comp} category={title} />)}
      </div>
    </div>
  );
}

export default Feed;
