import React, { lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import { history } from '../../../redux/store';
import Suspense from '../Suspense';
import Routes from '../../../constants/routes';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import styles from './styles.module.scss';

const Home = lazy(() => import('../../screens/Dashboard'));
const Login = lazy(() => import('../../screens/Login'));
const Sidebar = lazy(() => import('../Sidebar'));

function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <div className={`row full-width ${styles.container}`}>
        <Suspense>
          <Sidebar />
          <Switch>-
            <AuthenticatedRoute isPublicRoute exact path={Routes.HOME} component={Home} />
            <AuthenticatedRoute isPublicRoute exact path={Routes.LOGIN} component={Login} />
          </Switch>
        </Suspense>
      </div>
    </ConnectedRouter>
  );
}

export default AppRoutes;
