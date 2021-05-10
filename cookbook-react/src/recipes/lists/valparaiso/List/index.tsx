import React, { ReactNode, useState } from 'react';

import { Id, ItemType } from '../../../utils/types';

import ItemContainer from './ItemContainer';
import styles from './styles.module.scss';

interface InnerItem<IdType extends Id> extends ItemType<IdType> {
  deleted?: boolean;
}

interface ListProps<IdType extends Id, Item extends InnerItem<IdType>> {
  items: Item[];
  title?: string;
  onDeleteItem?: (id: IdType) => void;
  children: (item: Item) => ReactNode;
}

function List<IdType extends Id, Item extends ItemType<IdType>>({
  title,
  items,
  onDeleteItem,
  children
}: ListProps<IdType, Item>) {
  const [itemsList, setItems] = useState(items);

  const onDelete = (id: IdType) => {
    // Logical delete, necessary to keep index dependant styles (like alternating background-color in each row)
    const filteredItems = itemsList?.map((item: Item) => ({ ...item, deleted: item.id !== id }));
    setItems(filteredItems);
    onDeleteItem?.(id);
  };

  return (
    <div>
      {title && <label className={`m-bottom-3 ${styles.textNormal}`}>{title}</label>}
      <ul>
        {itemsList?.map((item) => (
          <ItemContainer key={item.id} item={item} onDelete={onDelete}>
            {children}
          </ItemContainer>
        ))}
      </ul>
    </div>
  );
}

export default List;
