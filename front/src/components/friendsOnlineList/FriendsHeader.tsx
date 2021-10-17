import { FaUserFriends } from 'react-icons/fa'

const FriendsHeader = () => {
	return (
		<div className="p-2 z-10 w-full flex items-center shadow bg-gray-500">
			{/* Header of Friends header */}
			<div className="px-4 rounded flex items-center justify-center h-10">
				<FaUserFriends color="#8E9297" className="mr-3" size={30}/>
				<h2 className="font-bold text-white">Friends</h2>
			</div>
			<div className="flex items-center space-x-3 overflow-clip">
				<h2 className="font-semibold text-white px-2 rounded cursor-pointer hover:bg-gray-600">Online</h2>
				<h2 className="font-semibold text-white px-2 rounded cursor-pointer hover:bg-gray-600">All</h2>
				<h2 className="font-semibold text-white px-2 rounded cursor-pointer hover:bg-gray-600">Pending</h2>
				<h2 className="font-semibold text-white px-2 rounded cursor-pointer hover:bg-gray-600">Blocked</h2>
				<button className="font-semibold text-white px-2 rounded cursor-pointer bg-green-500">Add Friend</button>
			</div>
			
		</div>
	)
}

export default FriendsHeader
