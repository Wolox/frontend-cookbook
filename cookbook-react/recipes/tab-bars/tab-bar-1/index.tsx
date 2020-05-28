import React, { useState } from 'react';
import cn from 'classnames';

import './styles.scss';

function TabBar() {
  const [selection, setSelection] = useState(null);

  return (
    <div id="tab-bar-1" className="tab-bar-container">
      <div className="tab-bar-wrapper">
          <button className={cn("option", {"selected": selection == 0})} onClick={() => setSelection(0)}>Sección 1</button>
          <button className={cn("option", {"selected": selection == 1})} onClick={() => setSelection(1)}>Sección 2</button>
          <button className={cn("option", {"selected": selection == 2})} onClick={() => setSelection(2)}>Sección 3</button>
      </div>
    </div>
  );
}

export default TabBar;
