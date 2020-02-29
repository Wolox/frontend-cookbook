import React, { createContext, useReducer } from 'react';

import { authReducer, authState } from './reducer';

export const AuthContext = createContext({});

interface Props {
  children: React.ReactNode;
}

function AuthProvider({ children }: Props) {
  const [authStore, dispatch] = useReducer(authReducer, authState);
  return <AuthContext.Provider value={[authStore, dispatch]}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
