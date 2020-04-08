import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from 'config/apollo-client';

import GlobalProvider from '~context/GlobalProvider';
import App from './app';
import './config/i18n';
import './scss/application.scss';
import { register } from './serviceWorker';

const render = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <AppContainer>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </AppContainer>
    </ApolloProvider>,
    document.getElementById('root')
  );
};

// Render once
render();

register();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render();
  });
}
