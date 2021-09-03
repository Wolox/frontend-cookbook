import { Component, ReactElement } from 'react';

type Props = {
  errorComponent: ReactElement;
};
type State = {
  error: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  state = { error: false };

  static getDerivedStateFromError(_: Error) {
    return { error: true };
  }

  render() {
    if (this.state.error) {
      return this.props.errorComponent;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
