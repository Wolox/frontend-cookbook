import { create } from 'apisauce';

import * as LocalStorageService from './LocalStorageService';

const api = create({ baseURL: process.env.REACT_APP_AUTH_BASE_URL });

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

export const loginToGithub = code =>
  api.post(`?code=${code}`).then(response => {
    if (!response.ok) {
      throw response;
    }
    setCurrentUser({ sessionToken: response });
    window.history.replaceState({}, document.title, '/');
  });
