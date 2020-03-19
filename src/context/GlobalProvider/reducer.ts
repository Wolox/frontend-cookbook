import { createReducer } from '~utils/reducer';

import { actions } from './actions';

export const globalState = {
  title: 'Wolox Cookbook',
  category: ''
};

const reducer = {
  [actions.SET_TITLE]: (state: any, { payload }: { payload: string }) => ({ ...state, title: payload }),
  [actions.SELECT_CATEGORY]: (state: any, { payload }: { payload: string }) => ({ ...state, category: payload })
};

type Action = { type: string };

export const globalReducer = <A extends Action>(state = globalState, action: A) =>
  createReducer(reducer, state, action);
