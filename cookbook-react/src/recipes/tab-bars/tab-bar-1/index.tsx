import React, { useState } from 'react';
import cn from 'classnames';

import './styles.scss';

interface Option {
  label: string;
  id: number;
}

interface Props {
  options: Option[];
}

function TabBar({
  // TODO: Remove this default options in a real app
  options = [
    { id: 1, label: 'Sección 1' },
    { id: 2, label: 'Sección 2' },
    { id: 3, label: 'Sección 3' }
  ]
}: Props) {
  const [selection, setSelection] = useState<null | number>(null);

  return (
    <div id="tab-bar-1" className="tab-bar-container">
      <div className="tab-bar-wrapper">
        <span className={`selector selected-${selection}`} />
        <div className="tabs">
          {options.map((option, idx) => (
            <button
              key={option.id}
              type="button"
              className={cn('option', { selected: selection === idx })}
              onClick={() => setSelection(idx)}
            >
              {option?.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TabBar;
