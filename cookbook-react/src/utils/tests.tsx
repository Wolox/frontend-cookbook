import React, { ReactNode, useReducer } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import { Context } from 'app/contexts/UserContext';
import { reducer, INITIAL_STATE } from 'app/contexts/UserContext/reducer';

interface Props {
  children: ReactNode;
}

function RootComponent({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>{children}</Switch>
      </Router>
    </Context.Provider>
  );
}

export default RootComponent;
