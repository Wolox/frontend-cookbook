import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { useAuthContext } from '~context/AuthProvider';

import Routes from '../../../constants/routes';

import Category from './screens/Category';
import Detail from './screens/Detail';
import { DEFAULT_ROUTE } from './constants';
import styles from './styles.module.scss';

function Dashboard() {
  const {
    state: { isUserLoggedIn }
  } = useAuthContext();

  return isUserLoggedIn ? (
    <div className={`full-width ${styles.dashboardContainer}`}>
      <Switch>
        <Route exact path={Routes.CATEGORY} component={Category} />
        <Route exact path={Routes.DETAIL} component={Detail} />
        <Redirect to={DEFAULT_ROUTE} />
      </Switch>
    </div>
  ) : (
    <p>Aun no estas logueado!</p>
  );
}

export default Dashboard;