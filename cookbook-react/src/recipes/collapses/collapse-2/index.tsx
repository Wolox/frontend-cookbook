import React, { useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface Props {
  title?: string;
  text?: string;
}

function Collapse({ title, text }: Props) {
  const [open, setOpen] = useState(false);

  const btnClass = cn([styles.arrow], {
    [styles.up]: !open,
    [styles.down]: open
  });
  const collapseWrapper = cn([styles.collapseWrapper], {
    [styles.collapseOpen]: open
  });
  const titleContainer = cn([styles.titleContainer], {
    [styles.open]: open
  });
  return (
    <div className={collapseWrapper}>
      <div className={titleContainer}>
        <h2 className={styles.title}>{title}</h2>
        <button type="button" className={btnClass} onClick={() => setOpen(!open)} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

export default Collapse;

Collapse.defaultProps = {
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  title: 'Título / Pregunta / Ítem'
};
