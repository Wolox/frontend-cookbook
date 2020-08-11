import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { ReactComponent as ValidIcon } from './assets/ic_valid.svg';
import { ReactComponent as InvalidIcon } from './assets/ic_invalid.svg';

interface Props {
  label?: string;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
  confirmable?: boolean;
  name: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

const INPUT_CONTAINER_ID = "barcelona"
const INPUT_ID = `${INPUT_CONTAINER_ID}-input`

function Input({ name, label, disabled, error, onChange, confirmable = true, placeholder }: Props) {
  return (
    <div id={INPUT_CONTAINER_ID}>
      <div className={`column ${styles.inputWrapper}`}>
        <label htmlFor={INPUT_ID} className={`${styles.inputLabel} m-bottom-1`}>{label}</label>
        <div className={styles.inputContent}>
          <input
            id={INPUT_ID}
            data-testid={`${name}-input`}
            name={name}
            className={cn(styles.inputBase, "m-bottom-1", { [styles.inputError]: !!error }, { [styles.confirmed]: confirmable && !error })}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
          />
          {confirmable && !error && <ValidIcon className={styles.inputIcon} data-testid={`${name}-valid-icon`} />}
          {error && <InvalidIcon className={styles.inputIcon} data-testid={`${name}-valid-icon`} />}
        </div>
        <span data-testid={`${name}-error`} className={cn(styles.errorMessage, { [styles.show]: !!error })}>{error}</span>
      </div>
    </div>
  );
}

// For example purposes, in a real app remove this.
Input.defaultProps = {
  label: 'Label',
  placeholder: 'example@'
}

export default Input;
