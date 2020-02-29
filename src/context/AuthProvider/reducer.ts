import { createReducer } from '~utils/reducer';

import { actions } from './actions';

export const authState = {
  currentUser: null
};

const reducer = {
  [actions.SET_USER]: (state: any, { payload }: { payload: string }) => ({ ...state, currentUser: payload }),
  [actions.REMOVE_USER]: (state: any) => ({ ...state, currentUser: null })
};

type Action = { type: string };

export const authReducer = <A extends Action>(state = authState, action: A) =>
  createReducer(reducer, state, action);
