import React from 'react'
import ActiveNowList from '../../components/FriendPageComponents/ActiveNow/ActiveNowList'
import FriendList from '../../components/FriendPageComponents/FriendList/FriendList'
import FriendsHeader from '../../components/FriendPageComponents/FriendsHeader'
import FriendsOnlineList from '../../components/FriendPageComponents/FriendsOnlineList/FriendsOnlineList'

const FriendsStartPage = () => {
	return (
		<>
			<FriendList  />

			<div className="flex flex-col w-full h-full bg-yellow-400">
				<FriendsHeader />
				<div className="flex h-full overflow-y-hidden">
					<FriendsOnlineList />

					<ActiveNowList />
				</div>
			</div>
		</>
	)
}

export default FriendsStartPage
