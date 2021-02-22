import React from 'react';
import { SpinnerProps } from 'react-spinkit';

import { getDisplayName } from '../../utils/HOCs';

import Loading from './components/Loading';

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
      <div className={classNameContainer} data-testid={`${getDisplayName(WrappedComponent)}Loading`}>
        <Loading {...rest} />
      </div>
    ) : (
      <WrappedComponent {...(passThroughProps as P)} />
    );
  }
  WithSpinner.displayName = `WithSpinner(${getDisplayName(WrappedComponent)})`;
  return WithSpinner;
};

export default withSpinner;
