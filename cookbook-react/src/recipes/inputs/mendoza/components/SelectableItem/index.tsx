import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface ItemType {
  id: string;
  title: string;
  subtitle: string;
  price: number;
}

interface Props {
  item: ItemType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'checkbox' | 'radio';
  selected: boolean;
}

function SelectableItem({ item, onChange, type, selected }: Props) {
  return (
    <label htmlFor={item.id} className={cn(styles.selectableItemContainer, { [styles.selected]: selected })}>
      <input
        id={item.id}
        className={styles.input}
        key={item.id}
        type={type}
        name={item.id}
        checked={selected}
        value={`${selected}`}
        onChange={onChange}
      />
      <div
        className={cn(styles.customCheckmark, {
          [styles.customCheckbox]: type === 'checkbox',
          [styles.customRadio]: type === 'radio'
        })}
      />
      <div className={styles.text}>
        <label htmlFor={item.id} className={styles.title}>
          {item.title}
        </label>
        <h6 className={styles.subtitle}>{item.subtitle}</h6>
      </div>
      <span className={styles.price}>{`$${item.price}`}</span>
    </label>
  );
}

export default SelectableItem;
