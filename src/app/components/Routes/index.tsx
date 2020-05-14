import React, { lazy, useEffect } from 'react';
import { Router } from 'react-router';
import { Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { actionCreators } from '~context/AuthProvider/actions';
import { useAuthContext } from '~context/AuthProvider';
import { loginToGithub, getCurrentUser } from '~services/AuthServices';
import Routes from '~constants/routes';

import Suspense from '../Suspense';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import styles from './styles.module.scss';

const Dashboard = lazy(() => import('../../screens/Dashboard'));
const Sidebar = lazy(() => import('../Sidebar'));
const history = createBrowserHistory();

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

function AppRoutes() {
  const { dispatch } = useAuthContext();
  const { setUser } = actionCreators;

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      dispatch(setUser(true));
    } else if (getCurrentUser()) {
      dispatch(setUser(true));
    } else if (code) {
      loginToGithub(code).then(() => dispatch(setUser(true)));
    }
  }, [dispatch, setUser]);

  return (
    <Router history={history}>
      <div className={`row full-width ${styles.container}`}>
        <Suspense>
          <Sidebar />
          <Switch>
            <AuthenticatedRoute isPrivateRoute exact path={Routes.DASHBOARD} component={Dashboard} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default AppRoutes;
