import template from '../../../assets/template.jpg'
import { MdClear } from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

type ParamsType = {
	id: string
}

type PropsType = {
	friendID: string
}

const FriendField = (props: PropsType) => {
	const [showClear, setShowClear] = useState(false)
	const [active, setActive] = useState(false);
	const history = useHistory()
	const params: ParamsType = useParams()

	useEffect(() => {
		if(props.friendID === params.id) return setActive(true)
		else return setActive(false)
	}, [history, params])

	const handleMessageClick = () => {
		history.push(`/friends/${props.friendID}`)
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
			className={`px-1.5 p-1.5 w-full flex items-center justify-between cursor-pointer rounded ${(active) && "bg-discord-active" } hover:bg-discord-hover`}
		>
			<div className="flex items-center">
				<img src={template} width="30px" className="mr-3 rounded-full" alt="" />
				<h2 className="text-discord-text-primary font-bold text-sm truncate w-36">Anden Etnisk Programmør</h2>
			</div>
			
			{showClear && (
				<MdClear color="white" size={20} width={3} onClick={handleClearClick} className="mr-2"/>
			)}
		</div>
	)
}

export default FriendField
