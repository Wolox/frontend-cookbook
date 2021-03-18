import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';
import { statusNames } from './constants';
import { StatusType } from './types';

interface StatusStepProps {
  status?: StatusType;
  className?: string;
}

function StatusStep({ status, className }: StatusStepProps) {
  const statuses = Object.keys(StatusType);

  let statusCurrentRendered = false;

  return (
    <div className={`${className ? className : ''} row ${styles.statusContainer}`}>
      {statuses.map((keyStatus, index) => {
        statusCurrentRendered = statusCurrentRendered ? statusCurrentRendered : status === keyStatus;

        const statusName = statusNames[keyStatus as StatusType];

        return (
          <div
            key={statusName}
            className={clsx(
              'column center full-width',
              styles.status,
              { [styles.statusCurrent]: status === keyStatus },
              { [styles.statusChecked]: !statusCurrentRendered }
            )}
          >
            {index < statuses.length - 1 && (
              <div
                className={clsx(styles.statusLine, {
                  [styles.statusLineChecked]: !statusCurrentRendered,
                  [styles.statusLineCurrent]: status === keyStatus
                })}
              />
            )}
            <div className={styles.statusBullet} />
            <div className={`m-top-4 ${styles.statusText}`}>{statusName}</div>
          </div>
        );
      })}
    </div>
  );
}

StatusStep.defaultProps = {
  status: StatusType.IN_PRODUCTION
};

export default StatusStep;
