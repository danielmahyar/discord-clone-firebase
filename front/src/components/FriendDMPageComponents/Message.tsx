import React from 'react'

type Props = {
	img_url: string;
	message: string;
	name: string;
	time: string;
}

const Message = ({ img_url, message, name, time }: Props) => {
	return (
		<div className="w-full flex mt-2 items-center px-4 py-1 hover:bg-discord-gray">
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
					<h2 className="text-white font-semibold text-lg mr-2 cursor-pointer">{name}</h2>
					<span className="text-discord-text-secondary text-sm select-none">21/10/2021 - 17:42</span>										
				</div>
				<p className="text-discord-text-para ">{message}</p>
			</div>
		</div>
	)
}

export default Message
