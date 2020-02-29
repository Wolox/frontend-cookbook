import React, { useEffect } from 'react';

import AuthProvider from '../context/AuthProvider';
import { apiSetup } from '../config/api';
import store from '../redux/store';

import Routes from './components/Routes';

import '../scss/application.scss';

function App() {
  useEffect(() => {
    apiSetup(store.dispatch);
  }, []);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
