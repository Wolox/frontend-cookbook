import React, { useState } from 'react';

import styles from './styles.module.scss';
import { data } from './constants';

interface Item {
  id: number;
  name: string;
}

interface ListProps {
  items?: Item[];
  title?: string;
  handleDelete?: (id: number) => void;
}

function List({ title, items, handleDelete }: ListProps) {
  const [itemsList, setItems] = useState(items);

  if (!itemsList?.length) {
    return null;
  }

  const onDelete = (id: number) => {
    const filteredItems: Item[] = itemsList.filter((item: Item) => item.id !== id);
    setItems(filteredItems);
    if (handleDelete) {
      handleDelete(id);
    }
  };

  return (
    <div>
      <div className="row space-between">
        {title && <label className={`m-bottom-3 ${styles.textNormal}`}>{title}</label>}
      </div>
      <ul>
        {itemsList?.map(item => (
          <li key={item.id} className={`${styles.listItem} row middle space-between`}>
            <span className={styles.textNormal}>{item.name}</span>
            <div
              className={`relative pointer ${styles.closeIcon}`}
              data-testid="delete-button"
              onClick={() => onDelete(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

// This is only for example purposes. Remove it in a real project.
List.defaultProps = {
  handleDelete: (index: string) => index,
  items: data,
  title: 'Título del listado'
};

export default List;
