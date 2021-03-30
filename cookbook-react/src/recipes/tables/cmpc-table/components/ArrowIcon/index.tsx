import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface ArrowIconProps {
  arrow: 'Left' | 'Right';
  disabled: boolean;
  onChangePage: (next?: boolean) => void;
}

function ArrowIcon({ disabled, onChangePage, arrow }: ArrowIconProps) {
  return (
    <div
      className={clsx('row middle center', styles.arrowIconContainer, {
        pointer: !disabled,
        [styles.disabled]: disabled
      })}
      onClick={() => onChangePage(arrow === 'Right')}
    >
      <button type="button" disabled={disabled}>
        {arrow === 'Right' ? '>': '<'}
      </button>
    </div>
  );
}

export default ArrowIcon;
