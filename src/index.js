import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

import App from './App';
import * as serviceWorker from './serviceWorker';

const GITHUB_BASE_URL = 'http://light/graphql';

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
//headers: {
//  authorization: `Bearer ${
//    process.env.REACT_APP_LIGHT_ACCESS_TOKEN
//  }`,
//  'Content-Type': 'application/json',
//  'Accept': 'application/json',
//},
});

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('ERROR graphQLErrors: ' + graphQLErrors);
    debugger;
    // do something with graphql error
  }
  if (networkError) {
    console.log('ERROR networkError: ' + networkError);
    debugger;
    // do something with network error
  }
});

const link = ApolloLink.from([errorLink, httpLink]);

const client = new ApolloClient({link, cache,});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('react-ql')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
