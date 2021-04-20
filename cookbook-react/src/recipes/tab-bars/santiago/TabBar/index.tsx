import React, { Fragment, useMemo, useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export type OptionId = string | number;

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
  const [internalActiveTab, setInternalActiveTab] = useState<Id | undefined>(active || initialValue);

  const activeValue = useMemo(() => active || internalActiveTab, [active, internalActiveTab]);

  const handleChange = (id: Id) => {
    if (!active) {
      setInternalActiveTab(id);
    }
    onChange(id);
  };

  const nextValueIsSelected = (index: number) =>
    options.length > index + 1 && options[index + 1].id === activeValue;

  return (
    <div className={cn(styles.optionsContainer, className)}>
      {options?.map((option, index) => (
        <Fragment key={`${option.id}`}>
          <button
            type="button"
            onClick={() => handleChange(option.id)}
            className={cn(styles.option, {
              [styles.disabled]: option.disabled,
              [styles.active]: option.id === activeValue
            })}
            disabled={option.disabled}
          >
            {option.title}
          </button>
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
