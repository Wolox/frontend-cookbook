import React from 'react';

import styles from './styles.module.scss';

interface CommonProps {
  error?: string;
  className?: string;
  errorClassName?: string;
  inputClassName?: string;
  label?: string | object;
  labelClassName?: string;
  touched?: boolean;
  submitCount?: number;
}

type TextAreaProps = {
  isTextarea?: true;
  inputRef?: React.ComponentProps<'textarea'>['ref'];
} & React.ComponentProps<'textarea'> &
  CommonProps;

type InputProps = {
  isTextarea?: false;
  inputRef?: React.ComponentProps<'input'>['ref'];
} & React.ComponentProps<'input'> &
  CommonProps;

type Props = TextAreaProps | InputProps;

function FormInput(props: Props) {
  const {
    isTextarea = false,
    className = '',
    error = '',
    errorClassName = '',
    inputClassName = '',
    submitCount,
    label = '',
    labelClassName = '',
    name,
    touched,
    inputRef,
    ...restProps
  } = props;

  const showError =
    (touched === undefined || touched) && error && (submitCount === undefined || submitCount > 0);

  return (
    <div className={`column start ${className}`}>
      {label && (
        <label htmlFor={name} className={`${labelClassName} m-bottom-1`}>
          {label}
        </label>
      )}
      {isTextarea ? (
        <textarea
          className={`${inputClassName} ${styles.input} ${showError ? styles.error : ''}`}
          name={name}
          ref={inputRef as TextAreaProps['inputRef']}
          {...(restProps as TextAreaProps)}
          id={name}
        />
      ) : (
        <input
          className={`${inputClassName} ${styles.input} ${showError ? styles.error : ''}`}
          name={name}
          ref={inputRef as InputProps['inputRef']}
          {...(restProps as InputProps)}
          id={name}
        />
      )}
      <span className={`${errorClassName} ${styles.errorText} ${showError ? styles.visible : ''}`}>
        {error}
      </span>
    </div>
  );
}

export default FormInput;
