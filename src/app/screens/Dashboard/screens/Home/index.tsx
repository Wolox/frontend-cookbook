import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GlobalContext } from '~context/GlobalProvider';
import { getAllComponentsByCategory } from '~utils/queries';

import CardsContainer from './components/CardsContainer';
import styles from './styles.module.scss';
import { getComponentsCode } from './utils';

function Home() {
  const { state } = useContext(GlobalContext);
  const { category } = state;
  const { loading, data } = useQuery(getAllComponentsByCategory(category));
  const components = data ? getComponentsCode(data.repository.object.entries) : [];
  return (
    <div className={`full-width ${styles.feedContent}`}>
      <h2 className="m-bottom-6 title">{category}</h2>
      <CardsContainer loading={loading} components={components} category={category} />
    </div>
  );
}

export default Home;
