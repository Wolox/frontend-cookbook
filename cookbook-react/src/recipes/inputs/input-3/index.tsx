import React from 'react';
import cn from 'classnames';

import './styles.scss';

interface Props {
  label?: string;
  disabled?: boolean;
  error?: string;
}

function Input({ label, disabled, error }: Props) {
  return (
    <div id="input-3">
      <div className="input-wrapper">
        <input
          id="input-tag-3"
          className={cn("input-base", { "input-error": !!error, "input-disabled": disabled })}
          placeholder=" "
          disabled={disabled}
        />
        <label htmlFor="input-tag-3" className={cn("input-label", { "label-disabled": disabled })}>{label}</label>
        {!!error && <span className="error-message">{error}</span>}
      </div>
    </div>
  );
}

Input.defaultProps = {
  label: 'Label'
}

export default Input;
