import { Dispatch } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '@config/api';

import { CurrentUser, AuthData } from '../interfaces/authInterfaces';
import { actionCreators as authActions } from '../redux/auth/actions';

const CURRENT_USER_KEY = '@Auth:currentUser';

// TODO: Adapt returned object to:
//   sessionToken: usually currentUser.access_token
//   Also don't forget to add any relevant user data needed for your app.
const formatUser = (currentUser: CurrentUser) => currentUser;

export const setCurrentUser = (currentUser: CurrentUser) => {
  api.setHeader('Authorization', `Bearer ${currentUser.sessionToken}`);
  return AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(formatUser(currentUser)));
};
export const getCurrentUser = () =>
  AsyncStorage.getItem(CURRENT_USER_KEY).then(value => JSON.parse(`${value}`));
export const removeCurrentUser = () => AsyncStorage.removeItem(CURRENT_USER_KEY);

export const authSetup = async (dispatch: Dispatch<any>) => {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    api.setHeader('Authorization', `Bearer ${currentUser.sessionToken}`);
  }
  dispatch(authActions.init(currentUser));
};

// TODO: Implement call to authentication API here
export const login = (_: AuthData) => {
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: 'CLIENT_ERROR',
  //   originalError: 'Error!'
  // });
  return Promise.resolve({
    ok: true,
    problem: null,
    data: { sessionToken: 'token' }
  });
};
