import React, { useState } from 'react';
import cn from 'classnames';

import ListScreen from './screens/List/list';
import styles from './styles.module.scss';

function PageInfiniteScroll() {
  const [view, setView] = useState('list');
  const handleChangeView = (value: string) => {
    if (value !== view) {
      setView(value);
    }
  };
  return (
    <div>
      <div className={cn('column middle center', styles.settings)}>
        <h1 className={styles.title}>Visualizacion</h1>
        <div className="row middle center">
          <div className="m-right-3">
            <input
              type="radio"
              id="list"
              name="view"
              value="list"
              onChange={(e) => handleChangeView(e.target.value)}
              checked={view === 'list'}
              className="m-right-1"
            />
            <label htmlFor="list"> Ver ejemplo de lista</label>
          </div>
          <div>
            <input
              type="radio"
              id="grid"
              name="view"
              value="grid"
              onChange={(e) => handleChangeView(e.target.value)}
              checked={view === 'grid'}
              className="m-right-1"
            />
            <label htmlFor="grid"> Ver ejemplo de Grilla</label>
          </div>
        </div>
      </div>
      <ListScreen isGrid={view === 'grid'} />
    </div>
  );
}

export default PageInfiniteScroll;
