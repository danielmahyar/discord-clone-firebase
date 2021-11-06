import { Route, Switch } from "react-router";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "./database/firebase-connect";
import IndexPage from "./pages/IndexPage";
import FriendsDMPage from "./pages/Friends/FriendsDMPage";
import LoginPage from "./pages/LoginPage";
import ServerStartPage from "./pages/Servers/ServerStartPage";
import FriendsStartPage from "./pages/Friends/FriendsStartPage";
import {  useEffect, useState } from "react";
import LoadingPage from "./pages/LoadingPage";
//Routes for main application excluding login/signup
export const routes = [
    {
      exact: true,
      path: "/friends",
      component: FriendsStartPage,
    },
    {
      path: "/friends/:uid",
      component: FriendsDMPage
    },
    {
      path: "/server/:uid",
      component: ServerStartPage
    },
]

const App = () => {
  const [fireUser, loading, error] = useAuthState(auth)

  return (
    <div className="h-screen flex flex-col overflow-hidden select-none relative z-0"> 
      <div>
        { error?.message }
      </div>

      <Switch>
        {fireUser && (
          <Route path="/">
            <IndexPage 
              routes={routes}
              fireUser={fireUser}
            />
          </Route>
        )}

        {loading && (
          <Route path="/">
            <LoadingPage />
          </Route>
        )}

        {!fireUser && (
          <Route path="/">
            <LoginPage />
          </Route>
        )}

      </Switch>
    </div>
  )
}

export default App;

