import React, { lazy } from 'react';
import { Router } from 'react-router';
import { Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Suspense from '../Suspense';
import Routes from '../../../constants/routes';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import styles from './styles.module.scss';

const Home = lazy(() => import('../../screens/Dashboard'));
const Login = lazy(() => import('../../screens/Login'));
const Sidebar = lazy(() => import('../Sidebar'));
const history = createBrowserHistory();

function AppRoutes() {
  return (
    <Router history={history}>
      <div className={`row full-width ${styles.container}`}>
        <Suspense>
          <Sidebar />
          <Switch>
            <AuthenticatedRoute isPrivateRoute exact path={Routes.HOME} component={Home} />
            <AuthenticatedRoute isPublicRoute exact path={Routes.LOGIN} component={Login} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default AppRoutes;
