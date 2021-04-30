import React, { useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export interface ItemWithId {
  id: string;
}

export interface SelectableChildBaseProps<ItemType> {
  item: ItemType;
  selected: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'checkbox' | 'radio';
  className?: string;
}

interface SelectableListProps<ItemType extends ItemWithId> {
  items: ItemType[];
  onSelectItem?: (id: string, selected: boolean) => void;
  children: (childProps: SelectableChildBaseProps<ItemType>) => JSX.Element;
  className?: string;
  itemClassName?: string;
}

interface MultipleSelectableListProps<ItemType extends ItemWithId> extends SelectableListProps<ItemType> {
  multiple: true;
  initialValues?: string[];
  initialValue?: never;
}

interface UniqueSelectableListProps<ItemType extends ItemWithId> extends SelectableListProps<ItemType> {
  multiple?: false;
  initialValue?: string;
  initialValues?: never;
}

interface SelectedIdState {
  [id: string]: boolean;
}

const initialState = (initialValues?: string[], initialValue?: string) => {
  if (initialValue) {
    return { [initialValue]: true };
  }
  if (initialValues) {
    return initialValues.reduce<SelectedIdState>((acc, id) => {
      acc[id] = true;
      return acc;
    }, {});
  }
  return {};
};

function SelectableList<ItemType extends ItemWithId>({
  items,
  onSelectItem,
  children,
  multiple,
  initialValues,
  initialValue,
  className = '',
  itemClassName = ''
}: MultipleSelectableListProps<ItemType> | UniqueSelectableListProps<ItemType>) {
  const [selectedIds, setSelectedIds] = useState<SelectedIdState>(initialState(initialValues, initialValue));

  const isSelected = (id: string) => selectedIds?.[id] ?? false;

  const handleSelectItem = (id: string) => () => {
    const selected = isSelected(id);

    if (multiple) {
      setSelectedIds({ ...selectedIds, [id]: !selected });
    } else {
      setSelectedIds({ [id]: !selected });
    }

    onSelectItem?.(id, !selected);
  };

  const inputType = multiple ? 'checkbox' : 'radio';

  return (
    <ul className={cn(styles.selectableListContainer, className)}>
      {items.map((item) => (
        <li key={item.id} className={cn(styles.item, itemClassName)}>
          {children({
            item,
            selected: isSelected(item.id),
            onChange: handleSelectItem(item.id),
            type: inputType
          })}
        </li>
      ))}
    </ul>
  );
}

export default SelectableList;
