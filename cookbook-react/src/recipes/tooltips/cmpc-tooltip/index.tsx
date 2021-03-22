import React, { cloneElement } from 'react';
import ReactTooltip, { TooltipProps } from 'react-tooltip';

import { COLORS } from './constants';
import styles from './styles.module.scss';

const { alabaster, boulder } = COLORS;

interface ToolTipProps extends TooltipProps {
  message?: string;
  variant?: string;
  tooltipClassName?: string;
  triggerComponent?: any;
}

function ToolTip({
  message,
  variant,
  place = 'right',
  type = 'light',
  effect = 'float',
  tooltipClassName = '',
  triggerComponent,
  ...rest
}: ToolTipProps) {
  return (
    <>
      {triggerComponent ? (
        cloneElement(triggerComponent, {
          variant,
          'data-tip': message
        })
      ) : (
        <span data-tip={message} className={variant}>
          <button type="button">Tooltip</button>
        </span>
      )}
      <ReactTooltip
        {...rest}
        place={place}
        className={`${styles.toolTipContent} ${tooltipClassName}`}
        type={type}
        effect={effect}
        multiline
        backgroundColor={alabaster}
        textColor={boulder}
      />
    </>
  );
}

// This is only for testing proposes, remove this in a real project.
ToolTip.defaultProps = {
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  triggerComponent: (<button type="button" className={styles.trigger}>Trigger component</button>)
};

export default ToolTip;
