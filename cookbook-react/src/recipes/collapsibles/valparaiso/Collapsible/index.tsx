import React, { ReactNode } from 'react';
import cn from 'classnames';

import useCollapse from '../../../hooks/useCollapse';

import styles from './styles.module.scss';

interface CollapsibleProps {
  children: ReactNode;
  title: string;
  className?: string;
  onChange?: (isOpen: boolean) => void;
  defaultIsClosed?: boolean;
  collapsibleId: string;
}

function Collapsible({
  collapsibleId,
  title,
  className,
  defaultIsClosed = false,
  children,
  onChange
}: CollapsibleProps) {
  const { handleCollapse, collapsibleRef, collapsed } = useCollapse<HTMLDivElement>({
    defaultIsOpen: !defaultIsClosed,
    onChange
  });

  return (
    <div className={cn(className, styles.collapsibleContainer, 'column')}>
      <div className="row space-between m-bottom-2">
        {title && <h3 className={styles.title}>{title}</h3>}
        <button
          type="button"
          className={cn(styles.icon, { [styles.iconClicked]: collapsed })}
          aria-expanded={!collapsed}
          aria-controls={collapsibleId}
          onClick={handleCollapse}
        />
      </div>
      <div id={collapsibleId} ref={collapsibleRef} role="region">
        {children}
      </div>
    </div>
  );
}

export default Collapsible;
