import React from 'react'
import ServerUserField from './ServerUserField'

const ServerUsersList = ({ friendsArray }: any) => {
	return (
		<div className="h-full w-64 flex-shrink-0 bg-discord-gray px-3 py-4 overflow-y-auto">

			<div className="w-full h-auto ">
				<div className="w-full h-auto mb-5 space-y-1">
					<h2 className="uppercase font-bold px-2 text-sm text-discord-text-primary">Online</h2>
					{friendsArray && friendsArray.map((friend: any, index: number) => (
						<ServerUserField 
							key={index}
							{...friend}
						/>
					))}
				</div>

				<div className="w-full h-auto mb-5 space-y-1">
					<h2 className="uppercase font-bold px-2 text-sm text-discord-text-primary">VOCAST</h2>
					{friendsArray && friendsArray.map((friend: any, index: number) => (
						<ServerUserField 
							key={index}
							{...friend}
						/>
					))}
				</div>

			</div>
		</div>
	)
}

export default ServerUsersList
