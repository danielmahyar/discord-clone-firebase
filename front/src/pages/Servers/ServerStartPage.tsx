import React from 'react'
import UserFooter from '../../components/userFooter/UserFooter'

const ServerStartPage = () => {
	return (
		<>
			{/* List after serverlist*/}
			<div className="h-full w-auto flex-shrink-0 relative z-0 rounded-tl-xl bg-discord-gray flex flex-col">
		 		<div className="h-14 w-full shadow flex-shrink-0">
					<p># General</p>
				</div>

		 		<div className="h-full">
					
		 		</div>

		 		<UserFooter />
		 	</div>

			 <div className="flex flex-col w-full h-full">

				{/* Header section for main section */}
				<div className="h-14 flex-shrink-0 z-10 w-full flex items-center shadow bg-discord-light">

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
