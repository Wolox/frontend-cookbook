import { Action } from '~constants/interfaces/store';

export interface GlobalState {
  title: string;
}

export interface SetTitleAction extends Action {
  payload: string;
}
