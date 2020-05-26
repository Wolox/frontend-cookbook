import React from 'react';
import cn from 'classnames';

import './styles.scss';

interface Props {
  disabled?: boolean;
  error?: string;
}

function Input({ disabled, error }: Props) {
  return (
    <div id="input-3" className="input-container">
      <div className="input-wrapper">
        <input className={cn("input-base", { "input-error": !!error, "input-disabled": disabled })} placeholder=" " disabled={disabled} />
        <span className={cn("input-label", { "label-disabled": disabled })}>Label</span>
        {!!error && <span className="error-message">{error}</span>}
      </div>
    </div>
  );
}

export default Input;
