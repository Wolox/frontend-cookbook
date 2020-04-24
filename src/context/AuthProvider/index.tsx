import { createContext, useContext } from 'react';

import withProvider from '~components/WithProvider';
import RenderChild from '~utils/renderChild';

import { authReducer, authState } from './reducer';
import { Auth } from './interfaces';

export interface AuthContextInterface {
  state: Auth;
  dispatch: React.Dispatch<any>;
}

export const AuthContext = createContext<AuthContextInterface>({
  state: { ...authState },
  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function
  dispatch: () => {}
});
export const useAuthContext = () => useContext(AuthContext);
export default withProvider({
  Context: AuthContext,
  reducer: authReducer,
  state: authState
})(RenderChild);
