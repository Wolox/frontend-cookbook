import { create } from 'apisauce';

import * as LocalStorageService from './LocalStorageService';

const api = create({ baseURL: process.env.REACT_APP_AUTH_BASE_URL });

export const setCurrentUser = currentUser => {
  api.setHeader('Authorization', currentUser.sessionToken);
  LocalStorageService.setSessionToken(currentUser.sessionToken);
};

const getTokenFromResponse = queryParams =>
  queryParams.match(/access_token=[a-z0-9]+/g)[0].substring('access_token='.length);

export const storeToken = response => {
  const token = getTokenFromResponse(response.data);
  localStorage.setItem('auth_token', token);
};

export const getCurrentUser = () => {
  const currentSessionToken = LocalStorageService.getSessionToken();
  if (currentSessionToken) return true;
  return false;
};

export const removeCurrentUser = () => LocalStorageService.removeSessionToken();

export const loginToGithub = code =>
  api.get(`?code=${code}`).then(response => {
    if (response.ok) {
      storeToken(response);
    }
    window.history.replaceState({}, document.title, '/');
  });
