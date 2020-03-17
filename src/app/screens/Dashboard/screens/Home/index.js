import React, { useState, useMemo } from 'react';

import Sidebar from '~components/Sidebar';

import Feed from './components/Feed';
import { CATEGORIES, getComponentsCode } from './constants';
import styles from './styles.module.scss';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelect = useMemo(() => event => setSelectedCategory(event.target.id), []);

  return (
    <div className={styles.container}>
      <Sidebar categories={CATEGORIES} selectedCategory={selectedCategory} handleSelect={handleSelect} />
      <Feed title={selectedCategory} components={getComponentsCode()} />
    </div>
  );
}

export default Home;
