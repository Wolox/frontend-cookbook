import React from 'react';

import SelectableList, { SelectableChildBaseProps } from './components/SelectableList';
import styles from './styles.module.scss';

/**
 * This component is an example. The real component is the SelectableList in the components folder
 */

interface ItemType {
  id: string;
  name: string;
  label: string;
}

const items = [
  { id: '1', name: 'first_item', label: 'First item' },
  { id: '2', name: 'second_item', label: 'Second item' },
  { id: '3', name: 'third_item', label: 'Third item' }
];

// If I don't do this, input names and ids collide since there are multiple lists in this example.
const listPrefix = (listId: string, value: string) => `${listId}-${value}`;

function ExampleSelectableItem({ item, type, selected, onChange }: SelectableChildBaseProps<ItemType>) {
  return (
    <>
      <input
        id={`list2-${item.id}`}
        className={styles.input}
        key={item.id}
        type={type}
        name={listPrefix('list-2', item.name)}
        checked={selected}
        onChange={onChange}
      />
      <label htmlFor={`list2-${item.id}`}>{item.label}</label>
    </>
  );
}

// eslint-disable-next-line react/no-multi-comp
function SelectableListExample() {
  return (
    <div className={styles.exampleContainer}>
      <span className={styles.listTitle}>With input as children</span>
      <SelectableList items={items}>
        {({ item, type, selected, onChange }) => (
          <div className={styles.item}>
            <input
              id={listPrefix('list-1', item.id)}
              type={type}
              className={styles.input}
              name={listPrefix('list-1', item.name)}
              checked={selected}
              onChange={onChange}
            />
            <label htmlFor={listPrefix('list-1', item.id)}>{item.label}</label>
          </div>
        )}
      </SelectableList>
      <span className={styles.listTitle}>With a custom component as children and multiple selection</span>
      <SelectableList items={items} itemClassName={styles.item} multiple>
        {({ item, type, selected, onChange }) => (
          <ExampleSelectableItem type={type} item={item} selected={selected} onChange={onChange} />
        )}
      </SelectableList>
      <span className={styles.listTitle}>With multiple selection and initialValues</span>
      <SelectableList items={items} itemClassName={styles.item} multiple initialValues={['1', '2']}>
        {({ item, type, selected, onChange }) => (
          <div className={styles.item}>
            <input
              id={listPrefix('list-3', item.id)}
              type={type}
              className={styles.input}
              name={listPrefix('list-3', item.name)}
              checked={selected}
              onChange={onChange}
            />
            <label htmlFor={listPrefix('list-3', item.id)}>{item.label}</label>
          </div>
        )}
      </SelectableList>
      <span className={styles.listTitle}>With no multiple selection and initialValue</span>
      <SelectableList items={items} itemClassName={styles.item} initialValue="2">
        {({ item, type, selected, onChange }) => (
          <div className={styles.item}>
            <input
              id={listPrefix('list-4', item.id)}
              type={type}
              className={styles.input}
              name={listPrefix('list-4', item.name)}
              checked={selected}
              onChange={onChange}
            />
            <label htmlFor={listPrefix('list-4', item.id)}>{item.label}</label>
          </div>
        )}
      </SelectableList>
    </div>
  );
}

export default SelectableListExample;
