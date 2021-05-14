import React, { ReactNode, useState, useRef, useEffect } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface CollapsibleProps {
  children: ReactNode;
  title: string;
  className?: string;
  onChange?: (isOpen: boolean) => void;
  defaultIsClosed?: boolean;
  collapsibleId: string;
}

const useCollapse = (defaultIsOpen: boolean, onCollapse?: (isOpen: boolean) => void) => {
  const [collapsed, setCollapsed] = useState(!defaultIsOpen);
  const collapsibleRef = useRef<HTMLDivElement>(null);

  const setCollapsedValue = (height: number, isCollapsed: boolean) => {
    const heightString = isCollapsed ? '0px' : `${height}px`;
    collapsibleRef.current!.style.height = heightString;
  };

  useEffect(() => {
    const calculateHeight = () => {
      const maxHeight = collapsibleRef.current?.scrollHeight ?? 0;
      setCollapsedValue(maxHeight, collapsed);
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, [collapsed]);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
    setCollapsedValue(collapsibleRef.current?.scrollHeight!, !collapsed);
    onCollapse?.(collapsed);
  };

  return { handleCollapse, collapsibleRef, collapsed };
};

function Collapsible({
  collapsibleId,
  title,
  className,
  defaultIsClosed = false,
  children,
  onChange
}: CollapsibleProps) {
  const { handleCollapse, collapsibleRef, collapsed } = useCollapse(!defaultIsClosed, onChange);

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
      <div id={collapsibleId} ref={collapsibleRef} className={cn(styles.content)} role="region">
        {children}
      </div>
    </div>
  );
}

export default Collapsible;
