import React, { ReactNode, useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface CollapsibleProps {
  children?: ReactNode;
  title?: string;
  className?: string;
  isCollapsed?: boolean;
  actions?: ReactNode;
}

function Collapsible({ title, className, isCollapsed, children, actions }: CollapsibleProps) {
  const [collapsed, setIsCollapsed] = useState(isCollapsed);

  const handleCollapse = () => {
    setIsCollapsed(!collapsed);
  };

  return (
    <div className={`${className ? className : ''} ${styles.collapsibleContainer} column`}>
      <div className="row space-between" onClick={handleCollapse}>
        {title && <span className={styles.title}>{title}</span>}
        <div className="row middle">
          {collapsed && actions}
          <button type="button" className={cn(styles.icon, { [styles.iconClicked]: collapsed })} />
        </div>
      </div>
      {!collapsed && <div className="m-top-10">{children}</div>}
    </div>
  );
}

Collapsible.defaultProps = {
  actions: (
    <button type="button" className={`m-right-10 ${styles.button}`}>
      Action
    </button>
  ),
  children: (
    <div>
      <span className={`m-bottom-5 ${styles.text}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </span>
      <button type="button" className={styles.button}>
        Action
      </button>
    </div>
  ),
  isCollapsed: true,
  title: 'Título principal'
};

export default Collapsible;
