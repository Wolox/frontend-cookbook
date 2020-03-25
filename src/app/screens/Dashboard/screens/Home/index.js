import React, { useContext } from 'react';

import { GlobalContext } from '~context/GlobalProvider';

import Card from './components/Card';
import styles from './styles.module.scss';
import { getComponentsCode } from './constants';

function Home() {
  const COMPONENTS = getComponentsCode(); /* TODO: graphQL */
  const { globalStore } = useContext(GlobalContext);
  const { category } = globalStore;
  return (
    <div className={`full-width ${styles.feedContent}`}>
      <h2 className="m-bottom-6 title">{category}</h2>
      <div className={styles.cardContainer}>
        {COMPONENTS &&
          COMPONENTS.map((comp, index) => (
            <Card key={comp.title} number={index} component={comp} category={category} />
          ))}
      </div>
    </div>
  );
}

export default Home;
