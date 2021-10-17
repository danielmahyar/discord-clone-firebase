import template from '../../assets/template.jpg'
import { MdClear } from 'react-icons/md'
import React, { useState } from 'react'

const FriendField = () => {
	const [showClear, setShowClear] = useState(false)

	const handleMessageClick = () => {

	}

	const handleClearShow = () => {
		setShowClear(true)
	}

	const handleClearRemove = () => {
		setShowClear(false)
	}

	const handleClearClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
		e.stopPropagation();
	}

	return (
		<div
			onClick={handleMessageClick}
			onMouseEnter={handleClearShow}
			onMouseLeave={handleClearRemove}
			className="px-1.5 p-1.5 w-full flex items-center justify-between cursor-pointer rounded hover:bg-gray-700"
		>
			<div className="flex items-center">
				<img src={template} width="30px" className="mr-3 rounded-full" alt="" />
				<h2 className="text-gray-500 font-bold text-sm truncate w-36">Anden Etnisk Programmør</h2>
			</div>
			
			{showClear && (
				<MdClear color="white" size={20} width={3} onClick={handleClearClick} className="mr-2"/>
			)}
		</div>
	)
}

export default FriendField
