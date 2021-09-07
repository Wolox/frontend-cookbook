import { createReducer } from 'redux-recompose';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { Action } from '@interfaces/reduxInterfaces';

import { ToastAction, ToastMessageState } from '../interfaces';

import { actions } from './actions';

const initialState: ToastMessageState = {
  active: false,
  message: '',
  type: ''
};

const reducerDescription = {
  [actions.SHOW_MESSAGE]: (state: ImmutableObject<ToastMessageState>, { payload }: Action<ToastAction>) =>
    state.merge({ active: true, message: payload?.message!, type: payload?.type! }),
  [actions.HIDE_MESSAGE]: (state: ImmutableObject<ToastMessageState>) => state.merge(initialState)
};

// eslint-disable-next-line new-cap
export default createReducer(Immutable(initialState), reducerDescription);
