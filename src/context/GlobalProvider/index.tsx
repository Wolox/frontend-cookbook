import React, { createContext, useContext } from 'react';

import withProvider from '~components/WithProvider';
import RenderChild from '~utils/renderChild';

import { globalReducer, globalState } from './reducer';
import { GlobalState } from './interfaces';

export interface GlobalContextInterface {
  state: GlobalState;
  dispatch: React.Dispatch<any>;
}

export const GlobalContext = createContext<GlobalContextInterface>({
  state: { ...globalState },
  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function
  dispatch: () => {}
});

export const useGlobalContext = () => useContext(GlobalContext);

export default withProvider({
  Context: GlobalContext,
  reducer: globalReducer,
  state: globalState
})(RenderChild);
