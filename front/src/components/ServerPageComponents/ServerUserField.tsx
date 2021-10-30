import React from 'react'

const ServerUserField = ({ img_url, status, username, sub_text }: any) => {

	return (
		<div className="px-2 py-1 cursor-pointer rounded hover:bg-discord-hover">
			<div className="flex items-center">
				<div className="flex items-center relative">
					{(() => {
						switch (status) {
							case "online":
								return <div className="absolute h-5 w-5 bg-green-600 rounded-full border-4 border-discord-light -bottom-1 right-1"></div>
							case "offline":
								return <div className="absolute h-5 w-5 bg-discord-user-offline rounded-full border-4 border-discord-light -bottom-1 right-1"></div>
							default:
								return <div className="absolute h-5 w-5 bg-discord-user-offline rounded-full border-4 border-discord-light -bottom-1 right-1"></div>
						}
					})()}
					<img src={img_url} width="35px" className="mr-3 rounded-full" alt="" />
				</div>
				<div className="flex flex-col ">
					<h2 className="text-discord-text-primary font-bold text-sm truncate w-36">{username}</h2>
					<p className="text-xs fontk-semibold text-discord-text-primary">{sub_text}</p>
				</div>
			</div>
		</div>
	)
}

export default ServerUserField
