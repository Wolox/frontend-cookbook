import React from 'react';

import Collapsible from './Collapsible';
import styles from './styles.module.scss';

function Example() {
  return (
    <Collapsible collapsibleId="collapsable-example" title="Título">
      <>
        <p className={`m-bottom-3 ${styles.text}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button type="button" className={styles.button}>
          Action
        </button>
      </>
    </Collapsible>
  );
}

export default Example;
