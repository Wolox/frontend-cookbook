import React from 'react';
import cn from 'classnames';
import i18next from 'i18next';

import styles from './styles.module.scss';
import { ReactComponent as ValidIcon } from './assets/ic_valid.svg';
import { ReactComponent as InvalidIcon } from './assets/ic_invalid.svg';

interface Props {
  label: string;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
  confirmable?: boolean;
  name: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

function Input({ name, label, disabled, error, onChange, confirmable = true, placeholder }: Props) {
  return (
    <div className={`column ${styles.inputWrapper}`}>
      <label htmlFor={name} className={`${styles.inputLabel} m-bottom-1`}>{label}</label>
      <div className={styles.inputContent}>
        <input
          id={name}
          data-testid={`${name}-input`}
          name={name}
          className={cn(styles.inputBase, "m-bottom-1", { [styles.inputError]: !!error }, { [styles.confirmed]: confirmable && !error })}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          aria-errormessage={`${name}-error`} 
          aria-invalid={!!error}
          role="textbox"
        />
        {confirmable && !error && <ValidIcon className={styles.inputIcon} role="status" aria-label={i18next.t('Input:valid') as string} />}
        {error && <InvalidIcon className={styles.inputIcon} role="status" aria-label={i18next.t('Input:invalid') as string} />}
      </div>
      <span id={`${name}-error`} role="alert" className={cn(styles.errorMessage, { [styles.show]: !!error })}>{error}</span>
    </div>
  );
}

// For example purposes, in a real app remove this.
Input.defaultProps = {
  label: 'Label',
  placeholder: 'example@'
}

export default Input;
