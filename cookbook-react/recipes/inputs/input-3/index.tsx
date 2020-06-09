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
    <div id="input-3" className="input-container">
      <div className="input-wrapper">
        <input
          className={cn("input-base", { "input-error": !!error, "input-disabled": disabled })}
          placeholder=" "
          disabled={disabled}
        />
        <label className={cn("input-label", { "label-disabled": disabled })}>{label}</label>
        {!!error && <span className="error-message">{error}</span>}
      </div>
    </div>
  );
}

Input.defaultProps = {
  label: 'Label'
}

export default Input;
