import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws';

const PRODUCTION = true

const GRAPHQL_LINK = (PRODUCTION) ? "discord-clone-1.herokuapp.com/graphql" : "localhost:4000/graphql"


const wsLink = new WebSocketLink({
  uri: `ws://${GRAPHQL_LINK}`,
  options: {
    reconnect: true
  }
});

const client = new ApolloClient({
  uri: `http://${GRAPHQL_LINK}`,
  link: wsLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client} >
        <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);