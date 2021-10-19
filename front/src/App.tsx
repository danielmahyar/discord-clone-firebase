import { Redirect, Route, Switch } from "react-router";
import ServerList from "./components/serverlist/ServerList";
import Top from "./components/Top";
import FriendsPage from "./pages/Friends/FriendsPage";
import FriendsDMPage from "./pages/Friends/FriendsDMPage";
import IndexPage from "./pages/IndexPage";
import ServerPage from "./pages/Servers/ServerPage";

const routes = [
  {
    isExact: true,
    path: "/",
    component: IndexPage,
    routes: [
      {
        path: "/friends",
        component: FriendsPage,
        routes: [
          {
            path: "/friends/:id",
            component: FriendsDMPage
          }
        ]
      },
      {
        path: "/server",
        component: ServerPage,
        routes: [
          {
            path: "/server/:id",
            component: FriendsDMPage
          }
        ]
      }
    ],
  },
  {

  }

]

const App = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden"> 

      <Top />

      <main className="h-full flex bg-discord-dark overflow-y-hidden">

        {/*Pages here: */}
        <Switch>
          {routes.map((route, index) =>(
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>


      </main>
    </div>
  )
}

const RouteWithSubRoutes = (route: any) => {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;

