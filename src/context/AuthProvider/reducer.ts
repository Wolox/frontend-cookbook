import { createReducer } from '~utils/reducer';
import { Action } from '~constants/interfaces/store';

import { actions } from './actions';
import { Auth, SetUserAction } from './interfaces';

export const authState: Auth = {
  currentUser: null
};

const reducer = {
  [actions.SET_USER]: (state: Auth, { payload }: SetUserAction) => ({ ...state, currentUser: payload }),
  [actions.REMOVE_USER]: (state: Auth) => ({ ...state, currentUser: null })
};

export const authReducer = <A extends Action>(state = authState, action: A) =>
  createReducer<Auth>(reducer, state, action);
