import React, { ReactNode } from 'react';

import { Id, ItemType } from '../../../utils/types';

import styles from './styles.module.scss';

interface InnerItem<IdType extends Id> extends ItemType<IdType> {
  deleted?: boolean;
}

interface ListProps<IdType extends Id, Item extends InnerItem<IdType>> {
  className?: string;
  items: Item[];
  title?: string;
  children: (item: Item) => ReactNode;
}

function List<IdType extends Id, Item extends ItemType<IdType>>({
  className = '',
  title,
  items,
  children
}: ListProps<IdType, Item>) {
  return (
    <div className={`${styles.itemContainer} ${className}`}>
      {title && <label className={`m-bottom-2 ${styles.title}`}>{title}</label>}
      <ul className="column">{items?.map((item) => children(item))}</ul>
    </div>
  );
}

export default List;
