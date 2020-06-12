import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { navigationRef, getActiveRoute, getRoute } from '@navigationHelper';
import { State } from '@interfaces/reduxInterfaces';
import CustomStatusBar from '@components/CustomStatusBar';
import withLoadable from '@components/Loadable';

import Navigator from './navigator';

const initialLoadingSelector = (state: State) => state.auth.initialLoading;

const AppNavigator = () => {
  const [routeName, setRouteName] = useState(null);
  useEffect(() => {
    setRouteName(getActiveRoute()?.name);
  }, []);
  const onStateChange = (state?: NavigationState) => {
    const previousRouteName = routeName;
    const currentRouteName = getRoute(state)?.name;
    if (previousRouteName !== currentRouteName) {
      setRouteName(currentRouteName);
    }
  };

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      <CustomStatusBar routeName={routeName} />
      <Navigator />
    </NavigationContainer>
  );
};

export default withLoadable(() => useSelector(initialLoadingSelector))(AppNavigator);
