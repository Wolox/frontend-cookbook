/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from '@components/AppNavigator';
import ToastMessage from '@toastsRecipes/toast-message';
import { apiSetup } from '@config/api';
import { actionCreators as AuthActions } from '@screensRecipes/login/redux/auth/actions';
import './i18n';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    apiSetup(dispatch);
    dispatch(AuthActions.init());
  }, [dispatch]);

  return (
  <>
  <ToastMessage />
  <AppNavigator />
</>
)
};

const MyAppWithOverlay = __DEV__ ? Reactotron.overlay(App) : App;

export default MyAppWithOverlay;
