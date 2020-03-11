import { stringArrayToObject } from '~utils/array';

export const actions: any = stringArrayToObject(['SET_TITLE'], '@@AUTH');

export const actionCreators = {
  setTitle: (payload: string) => ({ type: actions.SET_TITLE, payload })
};
