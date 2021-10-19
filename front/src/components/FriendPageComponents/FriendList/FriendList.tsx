import FriendListField from './FriendListField'
import { FaUserFriends, FaAccessibleIcon, FaPlus } from "react-icons/fa";
import { useState } from 'react'
import UserFooter from '../../userFooter/UserFooter';
import { Link, useLocation } from 'react-router-dom';

const FriendList = (): JSX.Element => {
	const location = useLocation()
	const [showDmModal, setShowDmModal] = useState(false);
	const [friendDMs, setFriendDms] = useState([
		{
			friendID: 'friend',
		},
		{
			friendID: 'test',
		},
	]);

	return (
		<div className="h-full w-auto flex-shrink-0 relative z-10 rounded-tl-xl bg-discord-gray flex flex-col">
			<div className="h-14 w-full flex items-center shadow flex-shrink-0 p-2">
				<input className="w-full bg-discord-dark font-bold py-2 text-discord-text-secondary rounded px-3 text-xs focus:outline-none" type="text" placeholder="Find or start a conversation" />
			</div>
			<div className="p-2 h-full w-full  z-0 scrollbar-thin scrollbar-thumb-rounded scrollbar-track-transparent scrollbar-thumb-gray-900">
				{/*2 first icons on top*/} 
				<div className="mb-4 space-y-1">
					<Link 
						to="/friends" 
						className={`px-2 py-1.5 rounded flex items-center cursor-pointer ${(location.pathname === "/friends" && "bg-discord-active")} hover:bg-gray-700`}
					>
						<FaUserFriends color="#8E9297" className="mr-3" size={30}/>
						<h2 className={`text-base ${(location.pathname === "/friends" ? "text-white font-bold" : "text-discord-text-primary")}`}>Friends</h2>
					</Link>
					<div className="px-2 py-1.5 rounded flex items-center cursor-pointer hover:bg-discord-hover">
						<FaAccessibleIcon color="#8E9297" className="mr-3" size={30}/>
						<h2 className="text-base text-discord-text-primary">Nitro</h2>
					</div>
				</div>

				{/* Friends list */}
				<div className="flex items-center justify-between px-1.5 mb-2">
					{showDmModal && (
						<div className="absolute right-0 top-32 z-20 transform translate-x-4 transition rounded bg-black">
							<h2 className="text-white text-xs p-2 font-semibold ">Create DM</h2>
						</div>		
					)}
					<h2 className="text-xs font-bold uppercase cursor-default text-gray-500 hover:text-gray-400">Direct Messages</h2>
					<FaPlus 
						onMouseEnter={() => setShowDmModal(true)} 
						onMouseLeave={() => setShowDmModal(false)}
						className="cursor-pointer" color="#8E9297" size={15}
					/>
				</div>
				{/* List with friend fields */}
				<div className="space-y-1">
					{friendDMs.length > 0 && friendDMs.map((friendInfo, index) => (
						<FriendListField key={friendInfo.friendID} {...friendInfo} />
					))}
				</div>
			</div>

			<UserFooter />
		</div>
	)
}

export default FriendList
