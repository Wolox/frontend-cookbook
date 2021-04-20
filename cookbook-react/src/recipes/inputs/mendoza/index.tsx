import React from 'react';

import SelectableList from '../selectable-list/components/SelectableList';

import SelectableItem from './components/SelectableItem';
import styles from './styles.module.scss';

/**
 * This component is an example. The real component is the SelectableItem in the components folder
 */

const list1Items = [
  { id: 'first_item', title: 'First item', subtitle: 'Small', price: 100 },
  { id: 'second_item', title: 'Second item', subtitle: 'Large', price: 300 },
  { id: 'third_item', title: 'Third item', subtitle: 'Medium', price: 200 }
];

const list2Items = [
  { id: 'fourth_item', title: 'Fourth item', subtitle: 'Small', price: 100 },
  { id: 'fifth_item', title: 'Fifth item', subtitle: 'Large', price: 300 },
  { id: 'sixth_item', title: 'Sixth item', subtitle: 'Medium', price: 200 }
];

function Example() {
  return (
    <div className={styles.exampleContainer}>
      <h2 className={styles.title}>Radio Button style</h2>
      <SelectableList items={list1Items} className={styles.listContainer} itemClassName={styles.item}>
        {({ item, type, selected, onChange }) => (
          <SelectableItem onChange={onChange} selected={selected} item={item} type={type} />
        )}
      </SelectableList>
      <h2 className={styles.title}>Checkbox style</h2>
      <SelectableList
        items={list2Items}
        className={styles.listContainer}
        itemClassName={styles.item}
        multiple
      >
        {({ item, type, selected, onChange }) => (
          <SelectableItem onChange={onChange} selected={selected} item={item} type={type} />
        )}
      </SelectableList>
    </div>
  );
}

export default Example;
