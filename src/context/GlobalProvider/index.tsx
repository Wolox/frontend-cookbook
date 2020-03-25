import React, { createContext, useReducer } from 'react';

import { globalReducer, globalState } from './reducer';

export interface GlobalContextInterface {
  globalStore: typeof globalState;
  dispatch: React.Dispatch<any>;
}

export const GlobalContext = createContext<GlobalContextInterface>({
  globalStore: { ...globalState },
  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function
  dispatch: () => {}
});

interface Props {
  children: React.ReactNode;
}

function GlobalProvider({ children }: Props) {
  const [globalStore, dispatch] = useReducer(globalReducer, globalState);
  return <GlobalContext.Provider value={{ globalStore, dispatch }}>{children}</GlobalContext.Provider>;
}

export default GlobalProvider;
