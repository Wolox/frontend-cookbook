import React, { lazy, useEffect, useState } from 'react';
import { Router } from 'react-router';
import { Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { loginToGithub, userIsLoggedIn } from '~services/AuthServices';

import Suspense from '../Suspense';
import Routes from '../../../constants/routes';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import styles from './styles.module.scss';

const Home = lazy(() => import('../../screens/Dashboard'));
const Login = lazy(() => import('../../screens/Login'));
const Sidebar = lazy(() => import('../Sidebar'));
const history = createBrowserHistory();

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

function AppRoutes() {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      setCurrentUser(true);
    } else if (userIsLoggedIn()) {
      setCurrentUser(true);
    } else if (code) {
      loginToGithub(code).then(() => setCurrentUser(true));
    }
  }, [currentUser]);

  return (
    <Router history={history}>
      <div className={`row full-width ${styles.container}`}>
        <Suspense>
          <Sidebar currentUser={currentUser} />
          <Switch>
            <AuthenticatedRoute
              currentUser={currentUser}
              isPrivateRoute
              exact
              path={Routes.HOME}
              component={Home}
            />
            <AuthenticatedRoute
              currentUser={currentUser}
              isPublicRoute
              exact
              path={Routes.LOGIN}
              component={Login}
            />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default AppRoutes;
