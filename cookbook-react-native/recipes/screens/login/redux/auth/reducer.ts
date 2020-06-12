import { createReducer, completeReducer, completeState, onSuccess } from 'redux-recompose';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { AuthState } from '../../interfaces/authInterfaces';

import { actions } from './actions';

const stateDescription = {
  currentUser: null,
  initialLoading: true
};

export const initialState = completeState(stateDescription, ['initialLoading']);

const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
    [actions.AUTH_INIT]: (state: ImmutableObject<AuthState>, action: any) =>
      state.merge({ initialLoading: false, [action.target]: action.payload }),
    [actions.LOGOUT]: onSuccess()
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
