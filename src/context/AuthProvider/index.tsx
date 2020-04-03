import { createContext, useContext } from 'react';

import withProvider from '~components/WithProvider';
import RenderChild from '~utils/renderChild';

import { authReducer, authState } from './reducer';

export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);
export default withProvider({
  Context: AuthContext,
  reducer: authReducer,
  state: authState
})(RenderChild);
