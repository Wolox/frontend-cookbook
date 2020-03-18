import React from 'react';

import Card from './components/Card';
import styles from './styles.module.scss';
import { getComponentsCode } from './constants';

function Home() {
  const COMPONENTS = getComponentsCode(); /* TODO: graphQL */
  const title = 'BUTTONS'; /* TODO: get from Context */
  return (
    <div className={`full-width ${styles.feedContent}`}>
      <h2 className="m-bottom-6 title">{title}</h2>
      <div className={styles.cardContainer}>
        {COMPONENTS &&
          COMPONENTS.map((comp, index) => (
            <Card key={comp.title} number={index} component={comp} category={title} />
          ))}
      </div>
    </div>
  );
}

export default Home;
