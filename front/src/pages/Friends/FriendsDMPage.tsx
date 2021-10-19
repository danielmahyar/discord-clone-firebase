import React from 'react'
import { useParams } from 'react-router'
import FriendList from '../../components/FriendPageComponents/FriendList/FriendList'
const FriendsDMPage = () => {
	const params: { id: string } = useParams()

	return (
		<main className="h-full w-full flex">

			{/* List after serverlist*/}
			<FriendList />


			{/* Main section to the right of the page*/}
			<div className="flex flex-col w-full h-full">

				{/* Header section for main section */}
				<div className="h-14 flex-shrink-0 z-10 w-full flex items-center shadow bg-discord-light">
					<p>Du taler med {params.id}</p>
				</div>

				{/* Container with main content */}
				<div className="flex h-full overflow-y-hidden">
					
					{/* Large content */}
					<div className="w-full z-0 h-full bg-discord-light flex flex-col ">
						<div className="h-full px-4 flex flex-col bg-discord-light scrollbar-thin scrollbar-track-discord-gray scrollbar-thumb-discord-dark overflow-y-scroll">
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
							<p>Test</p>
						</div>

						<div className="w-full px-4 z-0 h-16 bg-discord-light relative overflow-hidden flex items-start">
								<input type="text" placeholder="Message @Anden Etnisk Programmør" className="w-full z-40 text-white bg-discord-text-input py-3 px-4 rounded-xl focus:outline-none" name="" id="" />
						</div>
					</div>

				</div>

			</div>

		</main>
	)
}

export default FriendsDMPage
