import React, { useContext, useRef, useState } from 'react'
import { RiArrowDownSLine, RiHashtag } from 'react-icons/ri'
import { useLocation, useParams } from 'react-router'
import Message from '../../components/FriendDMPageComponents/Message'
import UserFooter from '../../components/userFooter/UserFooter'
import { CommContext } from '../IndexPage'
import InputField from '../../components/PageComponents/InputField'
import ServerUsersList from '../../components/ServerPageComponents/ServerUsersList'
import { Link } from 'react-router-dom'

const ServerStartPage = () => {
	const params: any = useParams()
	const location = useLocation()
	// const [search, setSearch] = useState("")
	// const [loading, setLoading] = useState(false)
	const [messageInput, setMessageInput] = useState("")
	const inputRef: any = useRef(null)
	const { friends }: any = useContext(CommContext);
	const friendsArray = friends.friendsArray

	const messages: any = [
		{
			id: "string",
			username: params.uid,
			img_url: "https://cdn.discordapp.com/avatars/616952908210241539/be7247dd6beee05bb23ba74718b727da.webp?size=96",
			time: "2015",
			content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint animi enim pariatur dignissimos voluptatibus sequi nemo. Quisquam placeat, autem, doloribus amet porro ad voluptatem vero sequi repellat, et tenetur,
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint animi enim pariatur dignissimos voluptatibus sequi nemo. Quisquam placeat, autem, doloribus amet porro ad voluptatem vero sequi repellat, et tenetur!
			Illo dolorum reprehenderit adipisci eaque eveniet hic impedit nostrum unde voluptatem commodi qui vero non quis odit ducimus, et dolores sunt dolorem quam exercitationem ad expedita, vel aliquid nesciunt! Nostrum.
			Quas reiciendis sit quis optio, eligendi culpa eius facere soluta quasi rem, magni velit voluptates adipisci labore beatae esse veritatis perferendis eos vero sed debitis ab earum voluptate! Vel, accusamus. `,
		},
		{
			id: "stridasdng",
			username: params.uid,
			img_url: "https://cdn.discordapp.com/avatars/345248360577368064/e16bd50df43ab3b948f6b8fcbb231eef.webp?size=96",
			time: "2015",
			content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint animi enim pariatur dignissimos voluptatibus sequi nemo. Quisquam placeat, autem, doloribus amet porro ad voluptatem vero sequi repellat, et tenetur,
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint animi enim pariatur dignissimos voluptatibus sequi nemo. Quisquam placeat, autem, doloribus amet porro ad voluptatem vero sequi repellat, et tenetur!
			Illo dolorum reprehenderit adipisci eaque eveniet hic impedit nostrum unde voluptatem commodi qui vero non quis odit ducimus, et dolores sunt dolorem quam exercitationem ad expedita, vel aliquid nesciunt! Nostrum.
			Quas reiciendis sit quis optio, eligendi culpa eius facere soluta quasi rem, magni velit voluptates adipisci labore beatae esse veritatis perferendis eos vero sed debitis ab earum voluptate! Vel, accusamus. `,
		},
		{
			id: "dawsdawdss",
			username: params.uid,
			img_url: "https://cdn.discordapp.com/avatars/345248360577368064/e16bd50df43ab3b948f6b8fcbb231eef.webp?size=96",
			time: "2015",
			content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint animi enim pariatur dignissimos voluptatibus sequi nemo. Quisquam placeat, autem, doloribus amet porro ad voluptatem vero sequi repellat, et tenetur,
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint animi enim pariatur dignissimos voluptatibus sequi nemo. Quisquam placeat, autem, doloribus amet porro ad voluptatem vero sequi repellat, et tenetur!
			Illo dolorum reprehenderit adipisci eaque eveniet hic impedit nostrum unde voluptatem commodi qui vero non quis odit ducimus, et dolores sunt dolorem quam exercitationem ad expedita, vel aliquid nesciunt! Nostrum.
			Quas reiciendis sit quis optio, eligendi culpa eius facere soluta quasi rem, magni velit voluptates adipisci labore beatae esse veritatis perferendis eos vero sed debitis ab earum voluptate! Vel, accusamus. `,
		},
		{
			id: "stridasddng",
			username: params.uid,
			img_url: "https://cdn.discordapp.com/avatars/345248360577368064/e16bd50df43ab3b948f6b8fcbb231eef.webp?size=96",
			time: "2015",
			content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint animi enim pariatur dignissimos voluptatibus sequi nemo. Quisquam placeat, autem, doloribus amet porro ad voluptatem vero sequi repellat, et tenetur,
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint animi enim pariatur dignissimos voluptatibus sequi nemo. Quisquam placeat, autem, doloribus amet porro ad voluptatem vero sequi repellat, et tenetur!
			Illo dolorum reprehenderit adipisci eaque eveniet hic impedit nostrum unde voluptatem commodi qui vero non quis odit ducimus, et dolores sunt dolorem quam exercitationem ad expedita, vel aliquid nesciunt! Nostrum.
			Quas reiciendis sit quis optio, eligendi culpa eius facere soluta quasi rem, magni velit voluptates adipisci labore beatae esse veritatis perferendis eos vero sed debitis ab earum voluptate! Vel, accusamus. `,
		}
	]

	return (
		<>
			{/* List after serverlist*/}
			<div className="h-full w-auto flex-shrink-0 relative z-0 rounded-tl-xl bg-discord-gray flex flex-col">
		 		<div className="h-14 w-full flex items-center justify-between pl-5 pr-4 shadow flex-shrink-0 rounded-tl-xl cursor-pointer hover:bg-discord-hover">
					<p className="text-white text-lg font-bold">Anti Kim</p>
					<RiArrowDownSLine 
						size={24}
						color="#D5D6D7"
					/>
				</div>

		 		<div className="h-full w-full overflow-x-hidden overscroll-y-auto p-2 pt-5 space-y-1">
					{/* Normal section */}
					<Link to={`${location.pathname}/general`} replace className="w-full h-auto py-2 flex items-center rounded px-2 cursor-pointer bg-discord-active hover:bg-discord-hover">
						<RiHashtag 
							className="text-discord-text-primary text-2xl mr-2"
						/>
						<p className="font-semibold text-white">General</p>
					</Link>
					{/* Normal section */}
					<Link to={`${location.pathname}/memes`} replace className="w-full h-10 flex items-center rounded px-2 cursor-pointer hover:bg-discord-hover">
						<RiHashtag 
							className="text-discord-text-primary text-2xl mr-2"
						/>
						<p className="font-semibold text-discord-text-primary">memes</p>
					</Link>
					{/* Normal section */}
					<Link to={`${location.pathname}/18+`} replace className="w-full h-10 flex items-center rounded px-2 cursor-pointer hover:bg-discord-hover">
						<RiHashtag 
							className="text-discord-text-primary text-2xl mr-2"
						/>
						<p className="font-semibold text-discord-text-primary">18-plus</p>
					</Link>
		 		</div>

		 		<UserFooter />
		 	</div>

			 <div className="flex flex-col w-full h-full">
				{/* Header section for main section */}
				<div className="h-14 flex-shrink-0 z-10 relative w-full flex items-center px-4 shadow bg-discord-light">
					<div className="flex h-full items-center">
						<RiHashtag 
							color="#72767D"
							className="mr-2"
							size={25}
						/>
						<h2 className="text-white font-bold text-lg">general</h2>
					</div>
					<div>

					</div>
				</div>

				{/* Container with main content */}
				<div className="flex h-full overflow-y-hidden">
					
					{/* Large content */}
					<div className="w-full h-full bg-discord-light flex flex-col">
						<div className="w-full h-full flex flex-col-reverse scrollbar-thin scrollbar-thumb-rounded scrollbar-track-discord-scrollbar-bg scrollbar-thumb-discord-dark overflow-y-scroll mr-1 overflow-x-hidden">
							{messages.length > 0 && messages.map((message: any, index: number) => (
								<Message 
									key={index}
									message={message}
									showImg={true}
								/>
							))}
						</div>

						<div className="w-full px-4 z-0 h-auto pt-5 pb-6  bg-discord-light relative overflow-hidden flex flex-col">
							<InputField />
						</div>
					</div>


					<ServerUsersList 
						friendsArray={friendsArray}
					/>

				</div>

			</div>
		</>
	)
}

export default ServerStartPage
