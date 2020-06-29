import { Nullable } from '@interfaces/globalInterfaces';

export interface CurrentUser {
  sessionToken: string;
}

export interface AuthData {
  email: string;
  password: string;
}

export interface AuthState {
  currentUser: Nullable<CurrentUser>;
  currentUserLoading: boolean;
  currentUserError: Nullable<string>;
  initialLoading: boolean;
}
