import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { authStackNavConfig, appStackNavConfig } from '@config/navigation';
import { inferRoute } from '@utils/navUtils';
import Login from '@screensRecipes/login';
import Home from '@screens/Home';
import { State } from '@interfaces/reduxInterfaces';

const Stack = createStackNavigator();
const AuthStack = () => <>{inferRoute(Stack)({ Login })}</>;

function AppStack() {
  return <>{inferRoute(Stack)({ Home })}</>;
}

const Navigator = () => {
  const currentUser = useSelector((state: State) => state.auth.currentUser);
  const defaultStackConfig = currentUser ? appStackNavConfig : authStackNavConfig;
  return <Stack.Navigator {...defaultStackConfig}>{currentUser ? AppStack() : AuthStack()}</Stack.Navigator>;
};
export default Navigator;
