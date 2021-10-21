import { FaUserFriends } from 'react-icons/fa'

const FriendsHeader = ({ site, setSite }: any) => {
	return (
		<div className="p-2 h-14 flex-shrink-0 z-20 w-full flex items-center shadow bg-discord-light">
			{/* Header of Friends header */}
			<div className="px-4 flex items-center justify-center border-r border-discord-border mr-2">
				<FaUserFriends color="#8E9297" className="mr-3" size={30}/>
				<h2 className="font-bold text-white pointer-events-none ">Friends</h2>
			</div>
			<div className="flex items-center space-x-3 overflow-clip">
				<h2 
					onClick={() => setSite("online")} 
					className={`font-semibold text-white px-2 rounded cursor-pointer transition-all ${(site === "online") && "bg-discord-dark"} hover:bg-discord-hover`}
				>Online</h2>
				<h2 
					onClick={() => setSite("all")} 
					className={`font-semibold text-white px-2 rounded cursor-pointer transition-all ${(site === "all") && "bg-discord-dark"} hover:bg-discord-hover`}
				>All</h2>
				<h2 
					onClick={() => setSite("pending")} 
					className={`font-semibold text-white px-2 rounded cursor-pointer transition-all ${(site === "pending") && "bg-discord-dark"} hover:bg-discord-hover`}
				>Pending</h2>
				<h2 
					onClick={() => setSite("blocked")} 
					className={`font-semibold text-white px-2 rounded cursor-pointer transition-all ${(site === "blocked") && "bg-discord-dark"} hover:bg-discord-hover`}
				>Blocked</h2>
				<button className="font-semibold text-white px-2 rounded cursor-pointer bg-green-500">Add Friend</button>
			</div>
			
		</div>
	)
}

export default FriendsHeader
