import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Sidebar from '~components/Sidebar';

import Routes from '../../../constants/routes';

import Category from './screens/Category';
import Detail from './screens/Detail';
import { DEFAULT_CATEGORY } from './constants';

function Dashboard() {
  return (
    <div className="row full-width full-height">
      <Sidebar />
      <div className="full-width">
        <Switch>
          <Route exact path={Routes.CATEGORY} component={Category} />
          <Route exact path={Routes.DETAIL} component={Detail} />
          <Redirect to={Routes.CATEGORY.replace(':category', DEFAULT_CATEGORY)} />
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
