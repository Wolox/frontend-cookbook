import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    const authToken = localStorage.getItem('auth_token');
    operation.setContext({
      headers: {
        authorization:
          process.env.NODE_ENV === 'production' ? `Bearer ${authToken}` : process.env.REACT_APP_GITHUB_TOKEN
      }
    });
  }
});
