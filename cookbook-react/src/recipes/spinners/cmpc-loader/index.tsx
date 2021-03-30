import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface LoadingProps {
  simple: boolean;
}

export default function Loader({ simple = false }: LoadingProps) {
  return (
    <div data-testid="loader" className={clsx(styles.loaderContainer, { [styles.simple]: simple })}>
      <div className={styles.ldsRing}>
        <div className={`${styles.section} ${styles.section1}`} />
        <div className={`${styles.section} ${styles.section2}`} />
        <div className={`${styles.section} ${styles.section3}`} />
      </div>
    </div>
  );
}
