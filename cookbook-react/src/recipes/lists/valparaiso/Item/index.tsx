import React from 'react';

import useCollapse from '../../../hooks/useCollapse';

import styles from './styles.module.scss';

interface ItemType {
  id: number;
  name: string;
}

interface ItemProps {
  item: ItemType;
  onDelete: (id: number) => void;
}

function Item({ item, onDelete }: ItemProps) {
  const handleDelete = () => onDelete(item.id);

  const { handleCollapse, collapsibleRef } = useCollapse<HTMLLIElement>({ onChange: handleDelete });

  return (
    <li key={item.id} ref={collapsibleRef} className={`${styles.listItem} row middle space-between`}>
      <div className="item-1">{item.name}</div>
      <button type="button" className={styles.closeIcon} onClick={handleCollapse} />
    </li>
  );
}

export default Item;
