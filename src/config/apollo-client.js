import ApolloClient from 'apollo-boost';

// eslint-disable-next-line init-declarations
const authToken = localStorage.getItem('auth_token');
let authHeader = authToken;

if (process.env.NODE_ENV !== 'production') {
  authHeader = '45cf68376ef425ba6aded64ef885954038914298';
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
