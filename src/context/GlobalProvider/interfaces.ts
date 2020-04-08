import { Action } from '~constants/interfaces/store';

export interface GlobalState {
  title: string;
  category: string;
}
export interface SetTitleAction extends Action {
  payload: string;
}
export interface SelectCategoryAction extends Action {
  payload: string;
}
