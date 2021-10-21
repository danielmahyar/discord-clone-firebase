import React, { useEffect } from 'react'
import {  Route, Switch, useHistory, useLocation } from 'react-router'
import ServerList from '../components/serverlist/ServerList'
import Top from '../components/Top'
import LoadingPage from './LoadingPage'


const START_LOCATION = "/friends"

export type FriendInformation = {
	name: string;
	sub_text: string;
	img_url: string;
	status: string
	uid: string;
}

export type ServerInfo = {
	name: string;
	uid: string;
	img_url: string;
}

const serverlist: Array<ServerInfo> = [
	{
		name: 'antikim',
		uid: 'antikim',
		img_url: "https://pbs.twimg.com/profile_images/495157428745678848/_iUW0sIC.jpeg",
	},
	{
		name: 'Memes',
		uid: 'Mems',
		img_url: "https://www.coogfans.com/uploads/db5902/original/3X/8/1/81173237ffa580ef710b0862fdddaac163274db1.jpeg",
	}
]

const friends: Array<FriendInformation> = [
	{
		uid: "tedawdawdaw",
		name: "John",
		sub_text: "John doe is cool",
		img_url: "https://image.shutterstock.com/image-vector/pictogram-head-question-mark-john-260nw-171638717.jpg",
		status: 'online',
	},
	{
		uid: "dawdsadwada",
		name: "Jane",
		sub_text: "Jane doe is cool",
		img_url: "data:image/png;base64,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",
		status: 'disturb_none'
	}
]

export const CommContext = React.createContext<any>({})

const IndexPage = ({ routes }: any) => {
	const location = useLocation()
	const history = useHistory()

	useEffect(() => {
		if(location.pathname === "/") return history.replace(START_LOCATION)	
	}, [location, history])

	return (
          <CommContext.Provider value={{ friends, serverlist }}>
			<Top />

			<main className="h-full flex bg-discord-dark overflow-y-hidden relative">
				<ServerList serverlist={serverlist}/>

				<Switch>
					<Route path="/" exact component={LoadingPage} />
					{routes.map((route: any, index: number) => (
						<Route {...route} key={index} />
					))}
				</Switch>

			</main>

          </CommContext.Provider>
	)
}

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
export default IndexPage
