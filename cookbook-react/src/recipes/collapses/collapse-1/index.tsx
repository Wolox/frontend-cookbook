import React, { useState, useCallback } from 'react';
import cn from 'classnames';

import './styles.scss';

interface Props {
  title?: string;
  text?: string;
}

function Collapse({ title, text }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div id="collapse-1" className="collapse-container">
      <div className={cn('collapse-wrapper', { 'collapse-open': open })}>
        <div className="title-container">
          <h2 className="title">{title}</h2>
          <button
            type="button"
            className={cn('icon', { 'icon-clicked': open })}
            onClick={() => setOpen(!open)}
          />
        </div>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

Collapse.defaultProps = {
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  title: 'Título / Pregunta / Ítem'
};

export default Collapse;
