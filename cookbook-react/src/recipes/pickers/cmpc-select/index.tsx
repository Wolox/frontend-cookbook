import React from 'react';
import { Controller, Control } from 'react-hook-form';
import Select from 'react-select';
import clsx from 'clsx';

import { customStyles } from './styles';
import styles from './styles.module.scss';

interface Props {
  label?: string;
  name?: string;
  options?: any[];
  control?: Control;
  rules?: Exclude<Record<string, any>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
  noOptionsMessage?: () => string;
  placeholder?: string;
  defaultValue?: string;
  onInputChange?: () => void;
  error?: string;
  disabled?: boolean;
}

function InputSelect({
  name,
  error,
  label,
  defaultValue = '',
  rules,
  control,
  disabled = false,
  ...rest
}: Props) {
  return (
    <div className="column full-width m-bottom-5">
      <label className={clsx('text-normal', { [styles.labelDisabled]: disabled })} htmlFor={name}>
        {label}
      </label>
      {control ? (
        <Controller
          render={props => (
            <Select
              {...rest}
              {...props}
              instanceId={name}
              inputId={name}
              styles={customStyles(error)}
              isDisabled={disabled}
            />
          )}
          name={name || ''}
          defaultValue={defaultValue && { label: defaultValue, value: defaultValue }}
          rules={rules}
          control={control}
        />
      ) : (
        <Select
          {...rest}
          name={name}
          instanceId={name}
          inputId={name}
          styles={customStyles(error)}
          isDisabled={disabled}
        />
      )}
      <span className={styles.selectErrorMessage}>{error}</span>
    </div>
  );
}

// This is only for testing proposes, remove this in a real project.
InputSelect.defaultProps = {
  label: 'Ejemplo de select',
  name: 'selectFormName',
  options: [
    {
      value: 'option1',
      label: 'Opción 1'
    },
    {
      value: 'option2',
      label: 'Opción 2'
    },
    {
      value: 'option3',
      label: 'Opción 3'
    },
    {
      value: 'option4',
      label: 'Opción 4'
    }
  ]
};

export default InputSelect;
