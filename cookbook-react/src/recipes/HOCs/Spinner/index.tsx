import React from 'react';
import { SpinnerProps } from 'react-spinkit';

import { getDisplayName } from '../../utils/HOCs';
import Loading from '../../spinners/SpinkitSpinner';

interface WithSpinnerProps {
  loading: boolean;
}

interface SpinnerConfig extends SpinnerProps {
  classNameContainer?: string;
}

const withSpinner = (spinnerConfig: SpinnerConfig = {}) => <P extends Record<string, any>>(
  WrappedComponent: React.ComponentType<P>
): React.FC<WithSpinnerProps & P> => {
  function WithSpinner({ loading, ...passThroughProps }: WithSpinnerProps) {
    const { classNameContainer = '', ...rest } = spinnerConfig;
    return loading ? (
      <Loading
        containerClassName={classNameContainer}
        data-testid={`${getDisplayName(WrappedComponent)}Loading`}
        {...rest}
      />
    ) : (
      <WrappedComponent {...(passThroughProps as P)} />
    );
  }
  WithSpinner.displayName = `WithSpinner(${getDisplayName(WrappedComponent)})`;
  return WithSpinner;
};

export default withSpinner;
