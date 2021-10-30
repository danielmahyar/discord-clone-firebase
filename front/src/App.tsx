import { Route, Switch } from "react-router";
import IndexPage from "./pages/IndexPage";
import FriendsDMPage from "./pages/Friends/FriendsDMPage";
import LoginPage from "./pages/LoginPage";
import ServerStartPage from "./pages/Servers/ServerStartPage";
import FriendsStartPage from "./pages/Friends/FriendsStartPage";
import { gql } from 'graphql-tag'
import {  useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
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

const GET_USER = gql`
  query getUser($uid: String!){
	  getUser(uid: $uid){
      uid,
      username,
      img_url,
      numberId,
      friends{
        uid
      }
    }
  }
`

const App = () => {
  const [user, setUser] = useState(null)
	const [getUser, { data, loading, error }] = useLazyQuery(GET_USER, { variables: { uid: localStorage?.getItem('userUid')}})

  useEffect(() => {
		if(data){
      console.log(data)
			setUser(data.getUser)
		}
	}, [data])

	useEffect(() => {
		if(localStorage.getItem('userUid')){
			getUser()
		}
	}, [getUser])

  return (
    <div className="h-screen flex flex-col overflow-hidden select-none relative z-0"> 

      <Switch>
        {localStorage.getItem('userUid') && user && (
          <Route path="/">
            <IndexPage 
              routes={routes}
              user={user}
              setUser={setUser}
            />
          </Route>
        )}

        {loading && (
          <Route path="/">
            <LoadingPage />
          </Route>
        )}

        {!user && !localStorage.getItem('userUid') && (
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

