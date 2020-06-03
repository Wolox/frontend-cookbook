import { createReducer } from '~utils/reducer';
import { Action } from '~constants/interfaces/store';

import { actions } from './actions';
import { GlobalState, SetTitleAction, SetTechAction } from './interfaces';

export const globalState: GlobalState = {
  title: 'Wolox Cookbook',
  tech: 'all'
};
const reducer = {
  [actions.SET_TITLE]: (state: GlobalState, { payload }: SetTitleAction) => ({ ...state, title: payload }),
  [actions.SET_TECH]: (state: GlobalState, { payload }: SetTechAction) => ({ ...state, tech: payload })
};

export const globalReducer = <A extends Action>(state = globalState, action: A) =>
  createReducer<GlobalState>(reducer, state, action);
