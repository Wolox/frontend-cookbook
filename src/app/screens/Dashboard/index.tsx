import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { actionCreators } from '~context/AuthProvider/actions';
import { useAuthContext } from '~context/AuthProvider';
import { loginToGithub, getCurrentUser } from '~services/AuthServices';

import Routes from '../../../constants/routes';

import Category from './screens/Category';
import Detail from './screens/Detail';
import { DEFAULT_ROUTE } from './constants';
import styles from './styles.module.scss';

function Dashboard() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  const {
    state: { isUserLoggedIn },
    dispatch
  } = useAuthContext();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      dispatch(actionCreators.setUserLoggedIn(true));
    }
    if (getCurrentUser()) {
      dispatch(actionCreators.setUserLoggedIn(true));
    } else if (code) {
      loginToGithub(code).then(() => dispatch(actionCreators.setUserLoggedIn(true)));
    }
  }, [code, dispatch]);

  return (
    <div className={`full-width ${styles.dashboardContainer}`}>
      {isUserLoggedIn ? (
        <Switch>
          <Route exact path={Routes.CATEGORY} component={Category} />
          <Route exact path={Routes.DETAIL} component={Detail} />
          <Redirect to={DEFAULT_ROUTE} />
        </Switch>
      ) : (
        <p>Aun no estas logueado!</p>
      )}
    </div>
  );
}

export default Dashboard;
