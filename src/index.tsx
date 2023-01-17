import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import App from './App';

import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

const client = new ApolloClient({
  uri: process.env.REACT_APP_URL,
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: process.env.REACT_APP_URL,
  }),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
