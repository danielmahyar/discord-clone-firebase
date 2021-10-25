import { Route, Switch } from "react-router";
import IndexPage from "./pages/IndexPage";
import FriendsDMPage from "./pages/Friends/FriendsDMPage";
import LoginPage from "./pages/LoginPage";
import ServerStartPage from "./pages/Servers/ServerStartPage";
import FriendsStartPage from "./pages/Friends/FriendsStartPage";
import {  useState } from "react";

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
  const [user, setUser] = useState(false)

  return (
    <div className="h-screen flex flex-col overflow-hidden select-none relative z-0"> 

      <Switch>
        {user ? (
          <Route path="/">
            <IndexPage 
              routes={routes}
              user={user}
            />
          </Route>
        ) : (
          <Route path="/">
            <LoginPage 
              setUser={setUser}
            />
          </Route>
        )}
      </Switch>
    </div>
  )
}

export default App;

