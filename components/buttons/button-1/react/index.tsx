import React from 'react';

import '../styles.scss';

function Button1() {
  return (
    <div className="column center btn-group-1">
      <button className="btn btn-1 m-bottom-2" disabled={true}>
        <div className="btn__content">cancel</div>
      </button>
      <button type="button" className="btn btn-1">
        <div className="btn__content">submit</div>
      </button>
    </div>
  );
}

export default Button1;
