import React from 'react';

import Sidebar from '~components/Sidebar';

import { CATEGORIES } from './constants';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <Sidebar categories={CATEGORIES} />
      {/* <Feed />*/}
    </div>
  );
}

export default Home;
