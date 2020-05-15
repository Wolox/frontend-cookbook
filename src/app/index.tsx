import React from 'react';

import AuthProvider from '../context/AuthProvider';
import '../scss/application.scss';

import Routes from './components/Routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
