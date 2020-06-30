export interface CurrentUser {
  sessionToken: string;
}

export interface AuthData {
  email: string;
  password: string;
}

export interface AuthState {
  currentUser: CurrentUser | null;
  currentUserLoading: boolean;
  currentUserError: string | null;
  initialLoading: boolean;
}
