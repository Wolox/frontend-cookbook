import ApolloClient from 'apollo-boost';

// eslint-disable-next-line init-declarations
const authToken = localStorage.getItem('auth_token');
let authHeader = authToken;

if (process.env.NODE_ENV !== 'production') {
  authHeader = process.env.REACT_APP_GITHUB_TOKEN || null;
}

const configApolloParameters = {
  uri: 'https://api.github.com/graphql',
  request: (operation: any) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${authHeader}`
      }
    });
  }
};

export const client = new ApolloClient(configApolloParameters);
