import FriendField from './FriendField'
import { FaUserFriends, FaAccessibleIcon, FaPlus, FaHeadphones } from "react-icons/fa";
import { IoSettingsSharp } from 'react-icons/io5'
import { BsHeadphones } from 'react-icons/bs'
import { TiMicrophone } from 'react-icons/ti'
import { BiMicrophoneOff } from 'react-icons/bi'
import userpic from '../../assets/template.jpg'
import React, { useState } from 'react'

const FriendList = (): JSX.Element => {
	const [isMicrophoneOn, setMicrophoneOn] = useState(false)
	const [showDmModal, setShowDmModal] = useState(false);

	const handleMicrophoneClick = (): void => {
		setMicrophoneOn(prev => !prev)
	}

	return (
		<div className="h-full w-64 flex-shrink-0 relative z-0 rounded-tl-xl bg-gray-800 flex flex-col">
			<div className="p-2 shadow w-full">
				<input className="w-full bg-gray-900 font-bold text-gray-600 rounded px-3 h-10 text-xs focus:outline-none" type="text" placeholder="Find or start a conversation" />
			</div>
			<div className="p-2 h-full w-full  z-0 scrollbar-thin scrollbar-thumb-rounded scrollbar-track-transparent scrollbar-thumb-gray-900">
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
			<div className="h-16 pl-2 pr-4 bg-gray-900 flex items-center flex-shrink-0">
				<div className="flex w-full">
					<div className="flex items-center mr-2">
						<img src={userpic} className="rounded-full cursor-pointer" width="50px" alt="" />
					</div>
					<div className="flex w-full flex-col truncate">
						<h2 className="text-white font-bold text-sm truncate w-24">Anden Etnisk Programmør</h2>
						<p className="text-gray-500 text-xs truncate w-24">Sovserotten holder mig fanget</p>
					</div>
				</div>

				<div className="flex h-full items-center space-x-3">
					{isMicrophoneOn ? (
						<TiMicrophone size={20} color="#B9BBBE" className="cursor-pointer" onClick={handleMicrophoneClick}/>

					) : (
						<BiMicrophoneOff size={20} color="#B9BBBE" className="cursor-pointer" onClick={handleMicrophoneClick}/>
					)}

					<BsHeadphones size={20} color="#B9BBBE" className="cursor-pointer" />
					<IoSettingsSharp size={20} color="#B9BBBE" className="cursor-pointer" />
				</div>
			</div>
		</div>
	)
}

export default FriendList
