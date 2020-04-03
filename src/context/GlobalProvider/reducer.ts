import { createReducer } from '~utils/reducer';
import { Action } from '~constants/interfaces/store';

import { actions } from './actions';
import { GlobalState, SetTitleAction, SelectCategoryAction } from './interfaces';

export const globalState: GlobalState = {
  title: 'Wolox Cookbook',
  category: ''
};
const reducer = {
  [actions.SET_TITLE]: (state: any, { payload }: SetTitleAction) => ({ ...state, title: payload }),
  [actions.SELECT_CATEGORY]: (state: any, { payload }: { payload: SelectCategoryAction }) => ({
    ...state,
    category: payload
  })
};
export const globalReducer = <A extends Action>(state = globalState, action: A) =>
  createReducer<GlobalState>(reducer, state, action);
