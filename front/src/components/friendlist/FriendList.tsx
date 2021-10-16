import React from 'react'
import FriendField from './FriendField'
import { FaUserFriends, FaAccessibleIcon, FaPlus } from "react-icons/fa";

const FriendList = () => {
	return (
		<div className="h-full w-64 rounded-tl-xl bg-gray-800 flex flex-col">
			<div className="p-3 shadow">
				<input className="w-full bg-gray-900 font-bold text-gray-600 rounded px-3 py-1.5 text-xs focus:outline-none" type="text" placeholder="Find or start a conversation" />
			</div>
			<div className="p-2 h-full scrollbar-thin scrollbar-thumb-rounded scrollbar-track-transparent scrollbar-thumb-gray-900">
				{/*2 first icons on top*/} 
				<div className="mb-4">
					<div className="px-2 py-1.5 rounded flex items-center cursor-pointer hover:bg-gray-700">
						<FaUserFriends color="#8E9297" className="mr-3" size={30}/>
						<h2 className="text-base text-gray-500">Friends</h2>
					</div>
					<div className="px-2 py-1.5 rounded flex items-center cursor-pointer hover:bg-gray-700">
						<FaAccessibleIcon color="#8E9297" className="mr-3" size={30}/>
						<h2 className="text-base text-gray-500">Nitro</h2>
					</div>
				</div>

				{/* Friends list */}
				<div className="flex items-center justify-between px-1.5 mb-2">
					<h2 className="text-xs font-bold uppercase cursor-default text-gray-500 hover:text-gray-400">Direct Messages</h2>
					<FaPlus className="cursor-pointer" color="#8E9297" size={15}/>
				</div>
				<div className="space-y-1">
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
					<FriendField />
				</div>
			</div>
			<div className="h-24">
				<h2>Test</h2>
			</div>
		</div>
	)
}

export default FriendList
