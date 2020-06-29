import React from 'react';

import styles from './styles.module.scss';

interface Props {
  item: number;
}

function ListExampleItem({ item }: Props) {
  return (
    <div key={item} className={styles.item}>
      {item}
    </div>
  );
}

export default ListExampleItem;
