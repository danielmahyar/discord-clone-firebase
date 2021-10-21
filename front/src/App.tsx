import { Route, Switch } from "react-router";
import IndexPage from "./pages/IndexPage";
import FriendsDMPage from "./pages/Friends/FriendsDMPage";
import LoginPage from "./pages/LoginPage";
import ServerStartPage from "./pages/Servers/ServerStartPage";
import FriendsStartPage from "./pages/Friends/FriendsStartPage";
import { useState } from "react";

//Routes for main application excluding login/signup
export const routes = [
    {
      exact: true,
      path: "/friends",
      component: FriendsStartPage,
    },
    {
      path: "/friends/:id",
      component: FriendsDMPage
    },
    {
      path: "/server/:id",
      component: ServerStartPage
    },
]

const App = () => {
  const [test, setTest] = useState(false)
  return (
    <div className="h-screen flex flex-col overflow-hidden select-none relative z-0"> 

      <Switch>
        {test ? (
          <Route path="/">
            <IndexPage routes={routes}/>
          </Route>
        ) : (
          <Route path="/">
            <LoginPage setTest={setTest}/>
          </Route>
        )}
      </Switch>
    </div>
  )
}

export default App;

