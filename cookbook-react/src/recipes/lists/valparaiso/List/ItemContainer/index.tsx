import React, { ReactNode } from 'react';

import { Id, ItemType } from '../../../../utils/types';
import useCollapse from '../../../../../hooks/useCollapse';

import styles from './styles.module.scss';

interface ItemProps<IdType extends Id, Item extends ItemType<IdType>> {
  item: Item;
  children: (item: Item) => ReactNode;
  onDelete: (id: IdType) => void;
}

function ItemContainer<IdType extends Id, Item extends ItemType<IdType>>({
  children,
  item,
  onDelete
}: ItemProps<IdType, Item>) {
  const handleDelete = () => onDelete(item.id);

  const { handleCollapse, collapsibleRef } = useCollapse<HTMLLIElement>({ onChange: handleDelete });

  return (
    <li key={item.id} ref={collapsibleRef} className={`${styles.listItem} row middle space-between`}>
      <div className="item-1">{children(item)}</div>
      <button type="button" className={styles.closeIcon} onClick={handleCollapse} />
    </li>
  );
}

export default ItemContainer;
