import ApolloClient from 'apollo-boost';
import { IntrospectionFragmentMatcher, InMemoryCache } from 'apollo-cache-inmemory';

import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache,
  request: operation => {
    const authToken = localStorage.getItem('auth_token');
    operation.setContext({
      headers: {
        authorization: `Bearer ${
          process.env.NODE_ENV === 'production' ? authToken : process.env.REACT_APP_GITHUB_TOKEN
        }`
      }
    });
  }
});
