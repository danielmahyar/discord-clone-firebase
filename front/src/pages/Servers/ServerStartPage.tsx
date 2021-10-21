import React from 'react'
import { useParams } from 'react-router'
import UserFooter from '../../components/userFooter/UserFooter'

const ServerStartPage = () => {
	const params = useParams()
	return (
		<>
			{/* List after serverlist*/}
			<div className="h-full w-auto flex-shrink-0 relative z-0 rounded-tl-xl bg-discord-gray flex flex-col">
		 		<div className="h-14 w-full flex items-center shadow flex-shrink-0 rounded-tl-xl cursor-pointer hover:bg-discord-hover">
					<p className="text-white font-bold ml-6">Anti Kim</p>
				</div>

		 		<div className="h-full w-full overflow-x-hidden overscroll-y-auto p-2 space-y-1">
					{/* Normal section */}
					<div className="w-full h-10 flex items-center rounded px-2 cursor-pointer bg-discord-active hover:bg-discord-hover">
						<span className="text-discord-text-primary text-2xl mr-2">#</span>
						<p className="font-semibold text-white">General</p>
					</div>
					{/* Normal section */}
					<div className="w-full h-10 flex items-center rounded px-2 cursor-pointer hover:bg-discord-hover">
						<span className="text-discord-text-primary text-2xl mr-2">#</span>
						<p className="font-semibold text-discord-text-primary">memes</p>
					</div>
					{/* Normal section */}
					<div className="w-full h-10 flex items-center rounded px-2 cursor-pointer hover:bg-discord-hover">
						<span className="text-discord-text-primary text-2xl mr-2">#</span>
						<p className="font-semibold text-discord-text-primary">18-plus</p>
					</div>
		 		</div>

		 		<UserFooter />
		 	</div>

			 <div className="flex flex-col w-full h-full">

				{/* Header section for main section */}
				<div className="h-14 flex-shrink-0 z-10 w-full flex items-center shadow bg-discord-light">
					<h2># general</h2>
				</div>

				{/* Container with main content */}
				<div className="flex h-full overflow-y-hidden">
					
					{/* Large content */}
					<div className="p-6 w-full h-full bg-discord-light flex flex-col scrollbar-thin scrollbar-thumb-rounded scrollbar-track-gray-600 scrollbar-thumb-gray-900 overflow-y-visible">

					</div>

					<div className="h-full w-64 flex-shrink-0 bg-discord-gray py-4 overflow-y-auto">

					</div>

				</div>

			</div>
		</>
	)
}

export default ServerStartPage
