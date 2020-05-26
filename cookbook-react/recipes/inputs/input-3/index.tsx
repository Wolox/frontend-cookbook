import React from 'react';
import cn from 'classnames';

import './styles.scss';

interface Props {
  disabled?: boolean;
  error?: boolean;
}

function Input({ disabled, error }: Props) {
  return (
    <div id="input-3" className="input-container">
      <div className="input-wrapper">
        <input className={cn("input-base", {"input-error": true})} placeholder=" " disabled={disabled} />
        <span className="input-label">Label</span>
      </div>
    </div>
  );
}

export default Input;
