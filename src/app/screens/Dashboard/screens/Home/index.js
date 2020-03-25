import React, { useState, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';

import Sidebar from '~components/Sidebar';
import { getCategories } from '~utils/queries';

import Feed from './components/Feed';
import { CATEGORIES, getComponentsCode } from './constants';
import styles from './styles.module.scss';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { loading, data } = useQuery(getCategories());
  const categories = !loading && data ? data.repository.object.entries : null;
  const handleSelect = useMemo(() => event => setSelectedCategory(event.target.id), []);
  return (
    <div className={styles.container}>
      <Sidebar
        categories={categories ? categories : CATEGORIES}
        selectedCategory={selectedCategory}
        handleSelect={handleSelect}
      />
      <Feed title={selectedCategory} components={getComponentsCode()} />
    </div>
  );
}

export default Home;
