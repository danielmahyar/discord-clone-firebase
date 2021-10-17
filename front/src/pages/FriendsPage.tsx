import ActiveNowList from '../components/activeNow/ActiveNowList'
import FriendList from '../components/friendlist/FriendList'
import FriendsHeader from '../components/friendsOnlineList/FriendsHeader'
import FriendsOnlineList from '../components/friendsOnlineList/FriendsOnlineList'

const FriendsPage = () => {
	return (
		<main className="h-full w-full flex">
	
			<FriendList  />

			<div className="flex flex-col w-full h-full bg-yellow-400">
				<FriendsHeader />
				<div className="flex overflow-y-hidden">
					<FriendsOnlineList />

					<ActiveNowList />
				</div>
			</div>

			{/* 
			<div className="flex flex-col w-full h-full">

				<FriendsHeader />

				<div className="absolute bg-red-700 h-full w-full">

				</div>
				
				<div className="flex h-full w-full">

					<FriendsOnlineList />

					<div className="hidden xl:block h-full w-72 flex-shrink-0 bg-gray-400">

					</div>
				</div> 
			</div>
		*/}
	 	</main>
	)
}

export default FriendsPage
