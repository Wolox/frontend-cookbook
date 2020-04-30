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

export const loginToGithub = code => {
  const authApi = api.setBaseURL(`${process.env.REACT_APP_AUTH_BASE_URL}?code=${code}`);
  return authApi.post().then(response => {
    setCurrentUser({ sessionToken: response });
    window.history.replaceState({}, document.title, '/');
  });
};
