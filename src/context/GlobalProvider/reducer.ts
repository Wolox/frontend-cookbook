import { createReducer } from '~utils/reducer';
import { Action } from '~constants/interfaces/store';

import { actions } from './actions';
import { GlobalState, SetTitleAction } from './interfaces';

export const globalState: GlobalState = {
  title: 'Wolox Cookbook'
};
const reducer = {
  [actions.SET_TITLE]: (state: any, { payload }: SetTitleAction) => ({ ...state, title: payload })
};

export const globalReducer = <A extends Action>(state = globalState, action: A) =>
  createReducer<GlobalState>(reducer, state, action);
