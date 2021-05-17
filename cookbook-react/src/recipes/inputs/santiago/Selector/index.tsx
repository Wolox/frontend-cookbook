import React, { Fragment } from 'react';
import cn from 'classnames';

import useUniqueSelection, { OptionId } from '../../../hooks/useUniqueSelection';

import styles from './styles.module.scss';

interface Option<Id extends OptionId> {
  title: string;
  disabled?: boolean;
  id: Id;
}

interface Props<Id extends OptionId> {
  options: Option<Id>[];
  onChange: (id: Id) => void;
  className?: string;
}

interface InternallyControlledProps<Id extends OptionId> extends Props<Id> {
  active?: never;
  initialValue?: Id;
}

interface ExternallyControlledProps<Id extends OptionId> extends Props<Id> {
  // Optional value to allow external change of tab. If empty, the component sets the clicked
  // tab as the active one.
  active: Id;
  initialValue?: never;
}

function Selector<Id extends OptionId>({
  className = '',
  active,
  onChange,
  options,
  initialValue
}: InternallyControlledProps<Id> | ExternallyControlledProps<Id>) {
  const { activeValue, handleChange } = useUniqueSelection({ onChange, active, initialValue });

  const nextValueIsSelected = (index: number) =>
    options.length > index + 1 && options[index + 1].id === activeValue;

  return (
    <div className={cn(styles.optionsContainer, className)}>
      {options?.map((option, index) => (
        <Fragment key={`${option.id}`}>
          <label
            htmlFor={`option-${option.id}`}
            key={option.id}
            className={cn(styles.optionLabel, {
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
          {index < options.length - 1 && (
            <div
              className={cn(styles.separator, {
                [styles.active]: nextValueIsSelected(index)
              })}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default Selector;
