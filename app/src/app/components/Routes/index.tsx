import React, { lazy, useEffect } from 'react';
import { Router, Redirect } from 'react-router';
import { Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { actionCreators } from '~context/AuthProvider/actions';
import { useAuthContext } from '~context/AuthProvider';
import { loginToGithub, getCurrentUser } from '~services/AuthServices';

import Suspense from '../Suspense';
import Routes from '../../../constants/routes';

import AuthenticatedRoute from './components/AuthenticatedRoute';

const Login = lazy(()=> import('~screens/Login'));
const Home = lazy(() => import('~screens/Dashboard/'));
const history = createBrowserHistory();

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

function AppRoutes() {
  const { dispatch } = useAuthContext();
  const { setUserLoggedIn } = actionCreators;

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      dispatch(setUserLoggedIn(false));
    } else if (getCurrentUser()) {
      dispatch(setUserLoggedIn(true));
    } else if (code) {
      loginToGithub(code).then(() => dispatch(setUserLoggedIn(true)));
    }
  }, [dispatch, setUserLoggedIn]);

  return (
    <Router history={history}>
      <Suspense>
        <Switch>
          <AuthenticatedRoute isPublicRoute path={Routes.LOGIN} component={Login} />
          <AuthenticatedRoute isPrivateRoute path={Routes.DASHBOARD} component={Home} />
          <Redirect to={Routes.LOGIN} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
