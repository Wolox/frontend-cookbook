import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Routes from '@constants/routes';
import { authStackNavConfig, appStackNavConfig } from '@config/navigation';
import { State } from '@interfaces/reduxInterfaces';
import Home from '@screens/Home';
import Login from '@screensRecipes/login';
import SignUp from '@screensRecipes/signup';
import { inferRoute } from '@utils/navUtils';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <>
      {inferRoute(Stack)({ [Routes.Login]: Login })}
      {inferRoute(Stack)({ [Routes.SignUp]: SignUp })}
    </>
  );
}

function AppStack() {
  return <>{inferRoute(Stack)({ [Routes.Home]: Home })}</>;
}

const Navigator = () => {
  const currentUser = useSelector((state: State) => state.auth.currentUser);
  const defaultStackConfig = currentUser ? appStackNavConfig : authStackNavConfig;
  return <Stack.Navigator {...defaultStackConfig}>{currentUser ? AppStack() : AuthStack()}</Stack.Navigator>;
};

export default Navigator;
