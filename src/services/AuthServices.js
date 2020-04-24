import api from '../config/api';

import * as LocalStorageService from './LocalStorageService';

export const setCurrentUser = currentUser => {
  api.setHeader('Authorization', currentUser.sessionToken);
  LocalStorageService.setSessionToken(currentUser.sessionToken);
};
export const getCurrentUser = () => {
  const currentSessionToken = LocalStorageService.getSessionToken();

  if (currentSessionToken) {
    api.setHeader('Authorization', currentSessionToken);

    return true;
  }

  return false;
};
export const removeCurrentUser = () => LocalStorageService.removeSessionToken();

const getTokenFromResponse = queryParams =>
  queryParams.match(/access_token=[a-z0-9]+/g)[0].substring('access_token='.length);

export const storeToken = response => {
  const token = getTokenFromResponse(response.data);
  localStorage.setItem('auth_token', token);
};

export const loginToGithub = code => {
  const authApi = api.setBaseURL(`${process.env.REACT_APP_AUTH_BASE_URL}?code=${code}`);
  return authApi.get().then(response => {
    storeToken(response);
    window.history.replaceState({}, document.title, '/');
  });
};

export const userIsLoggedIn = () =>
  localStorage.getItem('auth_token') && localStorage.getItem('auth_token') !== 'undefined';
