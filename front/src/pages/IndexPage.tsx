import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import ServerList from '../components/serverlist/ServerList'
import UserFooter from '../components/userFooter/UserFooter'

const IndexPage = ({ routes }: any) => {
	console.log(routes)

	const [rightBoxSize, setSetBoxSize] = useState("medium")

	return (
		<>
			<ServerList />
			
			<Switch>
				{routes.map((route: any, index: number) => {
					return (
						<Route key={index} {...route} />
					)
				})}
			</Switch>
		</>


		// <main className="h-full w-full flex">

		// 	{/* List after serverlist*/}
		// 	<div className="h-full w-64 flex-shrink-0 relative z-0 rounded-tl-xl bg-gray-800 flex flex-col">
		// 		<div className="h-14 w-full shadow flex-shrink-0">

		// 		</div>

		// 		<div className="h-full">

		// 		</div>

		// 		<UserFooter />
		// 	</div>


		// 	{/* Main section to the right of the page*/}
		// 	<div className="flex flex-col w-full h-full">

		// 		{/* Header section for main section */}
		// 		<div className="h-14 flex-shrink-0 z-10 w-full flex items-center shadow bg-gray-500">

		// 		</div>

		// 		{/* Container with main content */}
		// 		<div className="flex h-full overflow-y-hidden">
					
		// 			{/* Large content */}
		// 			<div className="p-6 w-full h-full bg-gray-500 flex flex-col scrollbar-thin scrollbar-thumb-rounded scrollbar-track-gray-600 scrollbar-thumb-gray-900 overflow-y-visible">


		// 			</div>

		// 			{rightBoxSize === "medium" && (
		// 				<div className="hidden xl:block h-full w-96 flex-shrink-0 bg-gray-400 py-4 overflow-y-auto">


		// 				</div>
		// 			)}

		// 		</div>

		// 	</div>

		// </main>
	)
}

export default IndexPage
