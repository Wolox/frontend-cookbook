import React from 'react';
import SpinkitSpinner, { SpinnerProps } from 'react-spinkit';

import { COLOR_SPINNER, SPINNER_DEFAULT } from './constants';
import styles from './styles.module.scss';

interface LoadingProps extends SpinnerProps {
  containerClassName: string;
}

// Check http://kyleamathews.github.io/react-spinkit/ for all possible spinner styles
function Loading({
  containerClassName = '',
  className = '',
  name = SPINNER_DEFAULT,
  color = COLOR_SPINNER,
  ...rest
}: LoadingProps) {
  return (
    <div className={`${containerClassName} ${styles.spinnerContainer}`}>
      <SpinkitSpinner className={className} name={name} color={color} fadeIn="half" {...rest} />
    </div>
  );
}

export default Loading;
