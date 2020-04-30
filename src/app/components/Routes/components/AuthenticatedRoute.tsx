import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { RouteProps } from 'react-router';

import Routes from '~constants/routes';

const DEFAULT_PRIVATE_ROUTE = Routes.HOME;

interface Props extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  isPublicRoute?: boolean;
  isPrivateRoute?: boolean;
  currentUser: boolean;
}

function AuthenticatedRoute({ component: Comp, ...props }: Props) {
  return (
    <Route
      {...props}
      path={DEFAULT_PRIVATE_ROUTE}
      // eslint-disable-next-line react/jsx-no-bind
      render={routeProps => <Comp {...routeProps} />}
    />
  );
}

AuthenticatedRoute.defaultProps = {
  currentUser: false
};

export default AuthenticatedRoute;
