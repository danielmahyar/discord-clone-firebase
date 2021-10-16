import { Route, Switch } from "react-router";
import ServerList from "./components/serverlist/ServerList";
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
    <div className="h-screen flex flex-col"> 
      {/*Top of Screen*/}
      <div className="w-full h-8 bg-gray-900 flex items-center">
        <h2 className="text-white px-2 font-bold">Vocast Hub</h2>
      </div>

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

