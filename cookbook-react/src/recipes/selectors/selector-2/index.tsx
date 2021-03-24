import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface Option {
  text: string;
  disabled?: boolean;
  id: number;
}

interface Props {
  options: Option[];
  active: null | number;
  setActive: (id: number) => void;
}

function Selector({
  active,
  setActive,
  // TODO: Remove this options in a real app
  options = [
    { id: 1, text: 'Opción 1', disabled: false },
    { id: 2, text: 'Opción 2', disabled: false },
    { id: 3, text: 'Opción 3', disabled: false }
  ]
}: Props) {
  return (
    <div className={styles.optionsContainer}>
      {options.map((option) => (
        <label
          htmlFor={`option-${option.id}`}
          key={option.id}
          className={cn(styles.radioLabel, {
            [styles.disabled]: option.disabled,
            [styles.active]: option.id === active
          })}
        >
          <input
            type="radio"
            id={`option-${option.id}`}
            name="option"
            checked={active === option.id}
            className={styles.option}
            disabled={option.disabled}
            value={option.id}
            onChange={() => setActive(option.id)}
          />
          {option.text}
        </label>
      ))}
    </div>
  );
}

export default Selector;
