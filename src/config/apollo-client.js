import ApolloClient from 'apollo-boost';

// eslint-disable-next-line init-declarations
let authHeader = '';
const authToken = localStorage.getItem('auth_token');

if (process.env.NODE_ENV !== 'production') {
  authHeader = process.env.REACT_APP_GITHUB_TOKEN;
} else if (authToken && authToken !== 'undefined') {
  authHeader = authToken;
}

const configApolloParameters = {
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${authHeader}`
      }
    });
  }
};

export const client = new ApolloClient(configApolloParameters);
