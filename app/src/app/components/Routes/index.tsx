import React, { lazy, useEffect } from 'react';
import { Router } from 'react-router';
import { Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { actionCreators } from '~context/AuthProvider/actions';
import { useAuthContext } from '~context/AuthProvider';
import { loginToGithub, getCurrentUser } from '~services/AuthServices';

import Suspense from '../Suspense';
import Routes from '../../../constants/routes';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import styles from './styles.module.scss';

const Home = lazy(() => import('~screens/Dashboard/'));
const Sidebar = lazy(() => import('../Sidebar'));
const history = createBrowserHistory();

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

function AppRoutes() {
  const { dispatch } = useAuthContext();
  const { setUserLoggedIn } = actionCreators;

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      dispatch(setUserLoggedIn(true));
    } else if (getCurrentUser()) {
      dispatch(setUserLoggedIn(true));
    } else if (code) {
      loginToGithub(code).then(() => dispatch(setUserLoggedIn(true)));
    }
  }, [dispatch, setUserLoggedIn]);

  return (
    <Router history={history}>
      <div className={`row full-width ${styles.container}`}>
        <Suspense>
          <Sidebar />
          <Switch>
            <AuthenticatedRoute isPublicRoute path={Routes.DASHBOARD} component={Home} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default AppRoutes;
