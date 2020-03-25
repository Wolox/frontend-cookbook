import { Action } from '~constants/interfaces/store';

interface User {
  email: string;
  userName: string;
}

export interface Auth {
  currentUser?: User;
}

export interface SetUserAction extends Action {
  payload: User;
}
