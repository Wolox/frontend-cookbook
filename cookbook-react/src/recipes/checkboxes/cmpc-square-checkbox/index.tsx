import React, { InputHTMLAttributes, Ref, ReactNode } from 'react';

import styles from './styles.module.scss';
import icon from './assets/ic_check.svg';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: Ref<HTMLInputElement>;
  text?: string | ReactNode;
  containerClassName?: string;
}

function SquareCheckbox({ name, text, inputRef, containerClassName = '', ...rest }: Props) {
  const id = `square-checkbox-${name}`;
  return (
    <div className={`${styles.checkboxContainer} ${containerClassName}`}>
      <input {...rest} type="checkbox" id={id} name={name} className={styles.checkboxInput} ref={inputRef} />
      <label htmlFor={id} className={`row middle full-width pointer ${styles.label}`}>
        <span className={`m-right-3 ${styles.check}`}>
          <img src={icon} className={`m-right-3 ${styles.checkIcon}`} alt="check" />
        </span>
        <span className={`text-normal ${styles.checkboxText}`}>{text}</span>
      </label>
    </div>
  );
}

// This is only for test, remove in a real project
SquareCheckbox.defaultProps = {
  text: 'Checkbox'
};

export default SquareCheckbox;
