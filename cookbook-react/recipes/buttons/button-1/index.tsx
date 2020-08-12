import React from 'react';

import './styles.scss';

function Button1() {
  return (
    <div className="column center btn-group-1">
      <button type="button" className="btn btn-1 m-bottom-2" disabled>
        <div className="btn-content">cancel</div>
      </button>
      <button type="button" className="btn btn-1">
        <div className="btn-content">submit</div>
      </button>
    </div>
  );
}

export default Button1;
