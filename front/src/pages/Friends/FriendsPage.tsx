import { Redirect, Route, Switch } from 'react-router'
import FriendsDMPage from './FriendsDMPage'
import FriendsStartPage from './FriendsStartPage'

const FriendsPage = ({ routes }: any) => {

	return (
		<main className="h-full w-full flex">

			<Switch>
				<Route exact path="/friends" component={FriendsStartPage}/>
				<Route path="/friends/:id" component={FriendsDMPage} />
			</Switch>
			
	 	</main>
	)
}

export default FriendsPage
