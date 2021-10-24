import React from 'react'
import { BsFillEmojiSmileFill, BsThreeDots } from 'react-icons/bs'
import { FaReply } from 'react-icons/fa'
import Icons from '../PageComponents/Icons'

type Props = {
	img_url: string;
	content: string;
	username: string;
	time: string;
}

const iconValues = {
	Icon: BsFillEmojiSmileFill,
	onClick: (): void => {
		console.log("Test")
	},
	iconConfig: {
		size: 25,
		color: "#B9BBBE",
	},
	tooltipText: "Message"
}

const Message = ({ img_url, content, username, time }: Props) => {
	return (
		<div className="w-full flex z-0 mt-2 relative group items-center px-4 py-1 hover:bg-discord-gray">
			<div className="w-28 h-10 absolute flex items-center justify-between space-x-1 -top-2 right-5 transform scale-0 border rounded bg-discord-light border-discord-gray group-hover:scale-100">
				<Icons 
					{...iconValues}
				/>
				<Icons 
					{...iconValues}
				/>
				<Icons 
					{...iconValues}
				/>
				{/* <BsFillEmojiSmileFill {...iconConfig}/>
				<FaReply {...iconConfig}/>
				<BsThreeDots {...iconConfig}/> */}
			</div>
			<div className="w-12 h-full ml-4 flex items-start justify-end">
				<img 
					src={img_url} 
					className="rounded-full mr-5 object-cover"
					width="50px"
					alt="" 
				/>
			</div>
			<div className="flex flex-col w-full">
				<div className="flex items-end">
					<h2 className="text-white font-semibold text-lg mr-2 cursor-pointer">{username}</h2>
					<span className="text-discord-text-secondary text-sm select-none">{time}</span>										
				</div>
				<p className="text-discord-text-para ">{content}</p>
			</div>
		</div>
	)
}

export default Message

	
	//className: "cursor-pointer p-2 bg-transparent hover:bg-discord-hover h-full w-full",