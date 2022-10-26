import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

const client = new ApolloClient({
  uri: 'https://277b-80-72-27-34.eu.ngrok.io/',
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
