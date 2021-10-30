import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HashRouter as Router } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { WebSocketLink } from '@apollo/client/link/ws'

const PRODUCTION = false

const GRAPHQL_LINK = (PRODUCTION) ? "https://discord-clone-1.herokuapp.com/graphql" : "http://localhost:4000/graphql"
const GRAPHQL_WS_LINK = (PRODUCTION) ? "wss://discord-clone-1.herokuapp.com/graphql" : "ws://localhost:4000/graphql"


const wsLink = new WebSocketLink({
  uri: GRAPHQL_WS_LINK,
  options: {
    reconnect: true,
  }
})

const client = new ApolloClient({
  uri: GRAPHQL_LINK,
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