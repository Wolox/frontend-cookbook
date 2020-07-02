import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { RouteProps } from 'react-router';

import { useAuthContext } from '~context/AuthProvider';
import Routes from '~constants/routes';
import Loading from '~components/Spinner/components/loading';

const DEFAULT_PUBLIC_ROUTE = Routes.LOGIN;
const DEFAULT_PRIVATE_ROUTE = Routes.DASHBOARD;

interface Props extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  isPublicRoute?: boolean;
  isPrivateRoute?: boolean;
}

function AuthenticatedRoute({
  /*
   * TODO Add this if you need it
   * device,
   */
  isPublicRoute,
  isPrivateRoute,
  // initialized,
  component: Comp,
  ...props
}: Props) {
  const {
    state: { isUserLoggedIn }
  } = useAuthContext();
  if (isUserLoggedIn === undefined) {
    return <Loading className="m-auto m-top-10" type="wandering-cubes" color="#002363" />;
  }
  return (
    <Route
      {...props}
      // eslint-disable-next-line react/jsx-no-bind
      render={routeProps => {
        /*
         * TODO Add this if you need it
         * if (device.isMobile && !device.adviceSubmitted) {
         *   return <AppDownloader />;
         * }
         */
        if (isUserLoggedIn) {
          if (isPublicRoute) {
            /*
             * TODO Add this if you need it
             * if (isUserLoggedIn && isPublicRoute) {
             * do not allow logged users to access public routes. redirect to app
             */
            return (
              <Redirect
                to={{
                  pathname: DEFAULT_PRIVATE_ROUTE,
                  state: { from: props.location }
                }}
              />
            );
          }
        } else if (isPrivateRoute) {
          // Do not allow unlogged users to access app. redirect to signin
          return (
            <Redirect
              to={{
                pathname: DEFAULT_PUBLIC_ROUTE,
                state: { from: props.location }
              }}
            />
          );
        }

        return <Comp {...routeProps} />;
      }}
    />
  );
}

export default AuthenticatedRoute;
