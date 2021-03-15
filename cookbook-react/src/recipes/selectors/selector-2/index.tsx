import React, { useState } from 'react';
import cn from 'classnames';

import './styles.scss';

interface Option {
  text: string;
  disabled: boolean;
  id: number;
}

interface Props {
  options: Option[];
}

function Selector({
  // TODO: Remove this options in a real app
  options = [
    { id: 1, text: 'Opción 1', disabled: false },
    { id: 2, text: 'Opción 2', disabled: false },
    { id: 3, text: 'Opción 3', disabled: false }
  ]
}: Props) {
  const [active, setActive] = useState<null | number>(null);
  return (
    <div className="options-container">
      {options.map((option, idx) => (
        <button
          className={cn('btn', { selected: active === idx, 'one-item': options.length === 1 })}
          key={option.id}
          type="button"
          onClick={() => setActive(idx)}
          disabled={option.disabled}
          aria-label={`option-${option.id}`}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default Selector;
