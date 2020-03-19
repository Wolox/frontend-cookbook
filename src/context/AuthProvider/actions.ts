import { stringArrayToObject } from '~utils/array';

export const actions: any = stringArrayToObject(['SET_USER', 'REMOVE_USER'], '@@AUTH');

export const actionCreators = {
  setUser: (payload: any) => ({ type: actions.SET_USER, payload }),
  removeUser: () => ({ type: actions.REMOVE_USER })
};
