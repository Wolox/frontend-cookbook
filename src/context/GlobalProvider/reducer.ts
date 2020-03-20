import { createReducer } from '~utils/reducer';

import { actions } from './actions';

interface GlobalState { [key: string]: any }

export const globalState: GlobalState = {
  title: 'Wolox Cookbook',
  category: ''
};

const reducer = {
  [actions.SET_TITLE]: (state: GlobalState, { payload }: { payload: string }) => ({ ...state, title: payload }),
  [actions.SELECT_CATEGORY]: (state: GlobalState, { payload }: { payload: string }) => ({ ...state, category: payload })
};

type Action = { type: string };

export const globalReducer = <A extends Action>(state = globalState, action: A) =>
  createReducer(reducer, state, action);
