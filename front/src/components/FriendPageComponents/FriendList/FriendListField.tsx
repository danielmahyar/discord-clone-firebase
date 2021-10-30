import { MdClear } from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { FriendInformation } from '../../../pages/IndexPage'

type ParamsType = {
	uid: string;
}

const FriendField = (props: FriendInformation) => {
	const [showClear, setShowClear] = useState(false)
	const [active, setActive] = useState(false);
	const history = useHistory()
	const params: ParamsType = useParams()
	const { status, username, sub_text, img_url } = props

	useEffect(() => {
		if(props.uid === params.uid) return setActive(true)
		else return setActive(false)
	}, [history, params, props.uid])

	const handleMessageClick = () => {
		history.push(`/friends/${props.uid}`)
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
			className={`px-1.5 p-1.5 w-full flex items-center relative justify-between cursor-pointer rounded ${(active) && "bg-discord-active" } hover:bg-discord-hover`}
		>
			{(() => {
				switch (status) {
					case "online":
						return <div className="absolute h-4 w-4 transition-all ease-in bg-green-600 rounded-full border-discord-gray bottom-0 left-6" style={{ borderWidth: "3px" }}></div>
					case "offline":
						return <div className={`absolute h-4 w-4 transition-all ease-in bg-discord-user-offline rounded-full border-4 ${(active) ? 'border-discord-light' : 'border-discord-gray'} bottom-0 left-6`}></div>
					default:
						return <div className="absolute h-4 w-4 transition-all ease-in bg-discord-user-offline rounded-full border-4 border-discord-gray bottom-0 left-6"></div>
				}
			})()}

			<div className="flex items-center">
				<img src={img_url} width="30px" className="mr-3 rounded-full" alt="" />
				<div className="flex flex-col ">
					<h2 className="text-discord-text-primary font-bold text-sm truncate w-36">{username}</h2>
					<p className="text-xs fontk-semibold text-discord-text-primary">{sub_text}</p>
				</div>
			</div>
			
			{showClear && (
				<MdClear color="white" size={20} width={3} onClick={handleClearClick} className="mr-2"/>
			)}
		</div>
	)
}

export default FriendField
