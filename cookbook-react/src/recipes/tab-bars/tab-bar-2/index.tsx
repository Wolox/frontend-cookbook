import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface Tab {
  icon?: string;
  label?: string;
  id: number;
}

interface Props {
  tabs?: Tab[];
  active?: null | number;
  handleChange: (id: number) => void;
}

function TabBar({ tabs, active, handleChange }: Props) {
  return (
    <div className={styles.tabsContainer}>
      {tabs?.map((tab) => (
        <label
          htmlFor={`tab-${tab.id}`}
          key={tab.id}
          className={cn(styles.radioLabel, {
            [styles.active]: tab.id === active
          })}
        >
          {tab.icon && <i className={cn(styles.icon, tab.icon)}>{tab.icon}</i>}
          <input
            type="radio"
            id={`tab-${tab.id}`}
            name="tab"
            checked={active === tab.id}
            className={styles.tabInput}
            value={tab.id}
            onChange={() => handleChange(tab.id)}
          />
          {tab.label}
        </label>
      ))}
    </div>
  );
}

export default TabBar;

TabBar.defaultProps = {
  active: null,
  tabs: [
    { id: 1, label: 'Primera tab', icon: '' },
    { id: 2, label: 'Segunda tab', icon: '' }
  ]
};
