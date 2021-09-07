import { Dispatch } from 'react';
import { ApiOkResponse, ApiErrorResponse } from 'apisauce';
import { AuthState } from '@screensRecipes/login/interfaces/authInterfaces';
import { ToastMessageState } from '@toastsRecipes/toast-message/interfaces';

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
  toastMessage: ToastMessageState;
}

export interface ReduxObject {
  getState: () => State;
}
