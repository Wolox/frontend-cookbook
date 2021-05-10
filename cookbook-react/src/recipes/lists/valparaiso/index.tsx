import React from 'react';

import styles from './styles.module.scss';
import List from './List';

interface Item {
  id: number;
  name: string;
}

export const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' }
];

function Example() {
  const handleDeleteItem = (id: number) => {
    console.log(`Deleted item with id ${id}`);
  };

  return (
    <div className={styles.exampleContainer}>
      <List onDeleteItem={handleDeleteItem} items={data} title="Título del listado">
        {(item: Item) => <span>{item.name}</span>}
      </List>
    </div>
  );
}

export default Example;
