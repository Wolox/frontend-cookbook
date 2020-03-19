import { stringArrayToObject } from '~utils/array';

export const actions: any = stringArrayToObject(['SET_TITLE', 'SELECT_CATEGORY'], '@@AUTH');

export const actionCreators = {
  setTitle: (payload: string) => ({ type: actions.SET_TITLE, payload }),
  selectCategory: (payload: string) => ({ type: actions.SELECT_CATEGORY, payload})
};
