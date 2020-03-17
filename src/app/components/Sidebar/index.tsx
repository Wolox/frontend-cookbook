import React from 'react';

import styles from './styles.module.scss';

interface Props {
  categories: Array<{
    id: number | string
    name: string
  }>
}

function Sidebar({ categories }: Props) {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarHeader} />
      <div className={`column ${styles.contentLinks} start`}>
        {categories && categories.map(category => <button type="button" key={category.id} className={styles.simpleLink}>{category.name}</button>)}
      </div>
    </div>
  );
}

export default Sidebar;
