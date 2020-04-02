import ApolloClient from 'apollo-boost';

const configApolloParameters = { uri: 'https://api.github.com/graphql' };

if (process.env.NODE_ENV !== 'production') {
  configApolloParameters.request = operation =>
    operation.setContext({ headers: { authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}` } });
}

export const client = new ApolloClient(configApolloParameters);
