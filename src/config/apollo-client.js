import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    const authHeader = process.env.REACT_APP_GITHUB_TOKEN;
    operation.setContext({
      headers: {
        authorization: `Bearer ${authHeader}`
      }
    });
  }
});
