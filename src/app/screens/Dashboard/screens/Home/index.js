import React, { useState, useMemo } from 'react';

import Sidebar from '~components/Sidebar';

import Feed from './components/Feed';
import { CATEGORIES, getComponentsCode } from './constants';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelect = useMemo(() => event => setSelectedCategory(event.target.id), []);

  return (
    <div className="row">
      <Sidebar categories={CATEGORIES} selectedCategory={selectedCategory} handleSelect={handleSelect} />
      <Feed title={selectedCategory} components={getComponentsCode()} />
    </div>
  );
}

export default Home;
