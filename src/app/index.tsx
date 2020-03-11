import React, { useEffect, useContext } from 'react';

import { GlobalContext } from '~context/GlobalProvider';

import AuthProvider from '../context/AuthProvider';
import { apiSetup } from '../config/api';

import Routes from './components/Routes';

import '../scss/application.scss';

function App() {
  const { globalStore, dispatch } = useContext(GlobalContext);
  useEffect(() => {
    document.title = globalStore.title;
    apiSetup(dispatch);
  }, [dispatch, globalStore]);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
