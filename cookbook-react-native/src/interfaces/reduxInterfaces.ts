import { Dispatch } from 'react';
import { ApiOkResponse, ApiErrorResponse } from 'apisauce';
import { AuthState } from '@screensRecipes/login/interfaces/authInterfaces';

export interface Action<T = null, P = null, K = null> {
  type: string;
  target?: string;
  payload?: T;
  key?: string;
  index?: number;
  service?: Function;
  injections?: any[];
  successSelector?: (response: ApiOkResponse<P>) => K;
  failureSelector?: (response: ApiErrorResponse<P>) => K;
}

export type DispatcheableAction<T = null, P = null, K = null> = (
  dispatch: Dispatch<Action<T, P, K>>,
  getState: () => State
) => void;

export interface State {
  auth: AuthState;
}

export interface ReduxObject {
  getState: () => State;
}
