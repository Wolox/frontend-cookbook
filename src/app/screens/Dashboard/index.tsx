import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Routes from '../../../constants/routes';

import Home from './screens/Home';
import Detail from './screens/Detail';
import { DEFAULT_ROUTE } from './constants';
import styles from './styles.module.scss';

function Dashboard() {
  return (
    <div className={`full-width ${styles.dashboardContainer}`}>
      <Switch>
        <Route exact path={Routes.CATEGORIES} component={Home} />
        <Route exact path={Routes.DETAIL} component={Detail} />
        <Redirect to={DEFAULT_ROUTE} />
      </Switch>
    </div>
  );
}

export default Dashboard;
