import React, { ReactNode, useReducer } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import { Context } from '~contexts/UserContext';
import { reducer, INITIAL_STATE } from '~contexts/UserContext/reducer';

interface Props {
  children: ReactNode;
}

export const RootComponent = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>{children}</Switch>
      </Router>
    </Context.Provider>
  );
};
