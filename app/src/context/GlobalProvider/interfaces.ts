import { Action } from '~constants/interfaces/store';

export interface GlobalState {
  title: string;
  tech: string;
}
export interface SetTitleAction extends Action {
  payload: string;
}

export interface SetTechAction extends Action {
  payload: string;
}
