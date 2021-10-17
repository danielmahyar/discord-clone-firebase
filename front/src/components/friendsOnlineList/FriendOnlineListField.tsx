import React from 'react'
import img from '../../assets/template.jpg'
import { BiMessage, BiDotsVerticalRounded } from 'react-icons/bi'
const FriendOnlineListField = () => {
	return (
		<div className="w-full px-3 py-4 border-t border-gray-600 flex items-center justify-between cursor-pointer hover:bg-gray-600">
			<div className="flex items-center">
				<div className="flex items-center mr-4">
					<img src={img} className="rounded-full" alt="" width="50px" />
				</div>
				<div className="flex flex-col justify-center">
					<h2 className="text-white text-base font-bold">Anden Etnisk Programmør</h2>
					<p className="text-gray-300 text-sm font-semibold">Dem der læser dette er døde i morgen</p>
				</div>
			</div>

			<div className="flex items-center space-x-2">
				<div className="rounded-full p-2 bg-gray-700">
					<BiMessage size="20" color="#B9BBBE"  fill="#B9BBBE" />
				</div>
				<div className="rounded-full p-2 bg-gray-700">
					<BiDotsVerticalRounded size="20" color="#B9BBBE"/>
				</div>
			</div>
		</div>
	)
}

export default FriendOnlineListField
