import { ApiOkResponse } from 'apisauce';
import { Dispatch } from 'react';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';

import * as AuthService from '../../services/AuthService';
import { CurrentUser, AuthData } from '../../interfaces/authInterfaces';

export const actions = createTypes(completeTypes(['LOGIN'], ['AUTH_INIT', 'LOGOUT']), '@@AUTH');

const TARGETS = {
  CURRENT_USER: 'currentUser'
};

export const actionCreators = {
  init: (user: CurrentUser) => ({
    type: actions.AUTH_INIT,
    target: TARGETS.CURRENT_USER,
    payload: user
  }),
  login: (authData: AuthData) => ({
    type: actions.LOGIN,
    target: TARGETS.CURRENT_USER,
    service: AuthService.login,
    payload: authData,
    injections: [
      withPostSuccess((_: any, response: ApiOkResponse<CurrentUser>) => {
        AuthService.setCurrentUser(response.data!);
      })
    ]
  }),
  logout: () => async (dispatch: Dispatch<any>) => {
    await AuthService.removeCurrentUser();
    dispatch({ type: actions.LOGOUT, target: TARGETS.CURRENT_USER });
  }
};
