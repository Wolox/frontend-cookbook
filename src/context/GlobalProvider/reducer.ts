import { createReducer } from '~utils/reducer';

import { actions } from './actions';

export const globalState = {
  title: 'Wolox Cookbook'
};

const reducer = {
  [actions.SET_TITLE]: (state: any, { payload }: { payload: string }) => ({ ...state, title: payload })
};

type Action = { type: string };

export const globalReducer = <A extends Action>(state = globalState, action: A) =>
  createReducer(reducer, state, action);
