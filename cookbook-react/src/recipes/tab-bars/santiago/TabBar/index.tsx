import React, { useMemo, useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export type OptionId = string | number;

interface Option<Id extends OptionId> {
  title: string;
  disabled?: boolean;
  id: Id;
}

interface Props<Id extends OptionId> {
  options?: Option<Id>[];
  // Optional value to allow external change of tab. If empty, the component sets the clicked
  // tab as the active one.
  active?: Id;
  onChange: (id: Id) => void;
  initialValue?: Id;
  className?: string;
}

function Selector<Id extends OptionId>({
  className = '',
  active,
  onChange,
  options,
  initialValue
}: Props<Id>) {
  const [internalActiveTab, setInternalActiveTab] = useState<Id | undefined>(active || initialValue);

  const activeValue = useMemo(() => active || internalActiveTab, [active, internalActiveTab]);

  const handleChange = (id: Id) => {
    if (!active) {
      setInternalActiveTab(id);
    }
    onChange(id);
  };

  return (
    <div className={cn(styles.optionsContainer, className)}>
      {options?.map((option) => (
        <label
          htmlFor={`option-${option.id}`}
          key={`${option.id}`}
          className={cn(styles.radioLabel, {
            [styles.disabled]: option.disabled,
            [styles.active]: option.id === activeValue
          })}
        >
          <input
            type="radio"
            id={`option-${option.id}`}
            name="option"
            checked={activeValue === option.id}
            className={styles.option}
            disabled={option.disabled}
            value={option.id}
            onChange={() => handleChange(option.id)}
          />
          {option.title}
        </label>
      ))}
    </div>
  );
}

export default Selector;
