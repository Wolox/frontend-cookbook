import React from 'react';

import './styles.scss';

interface Props {
  disable?: boolean;
  error?: boolean;
}

function Input({ disable, error }: Props) {
  return (
    <div id="input-3" className="input-container">
      <div className="input-wrapper">

        <input className="input-base" placeholder="Label" />
        <label className="input-label">Label</label>
      </div>
    </div>
  );
}

export default Input;
