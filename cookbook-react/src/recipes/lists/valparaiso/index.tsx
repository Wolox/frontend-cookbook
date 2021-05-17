import React, { useState } from 'react';

import styles from './styles.module.scss';
import List from './List';
import Item from './Item';

export const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' }
];

function Example() {
  const [items, setItems] = useState(data);
  const handleDeleteItem = (id: number) => {
    const filteredItems = items?.map((item) => ({ ...item, deleted: item.id !== id }));
    setItems(filteredItems);
  };

  return (
    <div className={styles.exampleContainer}>
      <List className="m-bottom-3" items={data} title="Listado de spans">
        {(item) => <span className="m-bottom-1">{item.name}</span>}
      </List>
      <List className="m-bottom-3" items={items} title="Listado de custom items">
        {(item) => <Item item={item} onDelete={handleDeleteItem} />}
      </List>
    </div>
  );
}

export default Example;
