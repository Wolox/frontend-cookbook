import React, { useEffect } from 'react';

import { useGlobalContext } from '~context/GlobalProvider';

import AuthProvider from '../context/AuthProvider';
import { apiSetup } from '../config/api';

import Routes from './components/Routes';

import '../scss/application.scss';

function App() {
  const { state, dispatch } = useGlobalContext();
  useEffect(() => {
    document.title = state.title;
    apiSetup(dispatch);
  }, [dispatch, state]);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
