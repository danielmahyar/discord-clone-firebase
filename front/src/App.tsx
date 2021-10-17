import { Route, Switch } from "react-router";
import ServerList from "./components/serverlist/ServerList";
import Top from "./components/Top";
import FriendsPage from "./pages/FriendsPage";

const routes = [
  {
    isExact: true,
    path: "/",
    component: FriendsPage
  }
]

const App = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden"> 

      <Top />

      <main className="h-full flex bg-gray-900 overflow-y-hidden">
        {/*Sidebar to the left*/}
        <ServerList />

        {/*Pages here: */}
        <Switch>
          {routes.map((route, index) =>(
            <Route exact={route.isExact} key={index} component={route.component} />
          ))}
        </Switch>


      </main>
    </div>
  )
}

export default App;

