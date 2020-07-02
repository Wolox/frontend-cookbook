import { Action } from '~constants/interfaces/store';

interface User {
  email: string;
  userName: string;
}

export interface Auth {
  isUserLoggedIn?: boolean;
  currentUser?: User | null;
}

export interface SetUserAction extends Action {
  payload: User;
}

export interface SetUserIsLoggedIn extends Action {
  payload: boolean;
}
