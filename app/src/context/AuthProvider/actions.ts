import { stringArrayToObject } from '~utils/array';

export const actions: any = stringArrayToObject(['SET_USER', 'SET_USER_LOGGED_IN', 'REMOVE_USER'], '@@AUTH');

export const actionCreators = {
  setUser: (payload: any) => ({ type: actions.SET_USER, payload }),
  setUserLoggedIn: (payload: boolean) => ({ type: actions.SET_USER_LOGGED_IN, payload }),
  removeUser: () => ({ type: actions.REMOVE_USER })
};
