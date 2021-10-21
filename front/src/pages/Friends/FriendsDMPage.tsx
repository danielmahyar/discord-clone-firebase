import React, { useEffect, useRef, useState } from 'react'
import { AiFillGift, AiFillPlusCircle, AiOutlineFileGif } from 'react-icons/ai'
import TextareaAutosize from 'react-textarea-autosize';
import { useParams } from 'react-router'
import DMHeader from '../../components/FriendDMPageComponents/DMHeader'
import Message from '../../components/FriendDMPageComponents/Message'
import FriendList from '../../components/FriendPageComponents/FriendList/FriendList'
import useEventListener from '../../hooks/useEventListener';

const FriendsDMPage = () => {
	const [search, setSearch] = useState("")
	const [loading, setLoading] = useState(false)
	const [messageInput, setMessageInput] = useState("")
	const inputRef: any = useRef(null)
	const params: { id: string } = useParams()

	useEventListener("keydown", (e: any) => {
		if(e.key === "Enter" && messageInput.trim() !== "") {
			console.log("test")
			setMessageInput("")
		}
	})

	useEffect(() => {
		console.log(messageInput)
	}, [messageInput])

	const messages: any = [
		{
			id: "string",
			name: params.id,
			img_url: "https://cdn.discordapp.com/avatars/616952908210241539/be7247dd6beee05bb23ba74718b727da.webp?size=96",
			time: "2015",
			message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint animi enim pariatur dignissimos voluptatibus sequi nemo. Quisquam placeat, autem, doloribus amet porro ad voluptatem vero sequi repellat, et tenetur,
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint animi enim pariatur dignissimos voluptatibus sequi nemo. Quisquam placeat, autem, doloribus amet porro ad voluptatem vero sequi repellat, et tenetur!
			Illo dolorum reprehenderit adipisci eaque eveniet hic impedit nostrum unde voluptatem commodi qui vero non quis odit ducimus, et dolores sunt dolorem quam exercitationem ad expedita, vel aliquid nesciunt! Nostrum.
			Quas reiciendis sit quis optio, eligendi culpa eius facere soluta quasi rem, magni velit voluptates adipisci labore beatae esse veritatis perferendis eos vero sed debitis ab earum voluptate! Vel, accusamus. `,
		},
		{
			id: "stridasdng",
			name: params.id,
			img_url: "https://cdn.discordapp.com/avatars/345248360577368064/e16bd50df43ab3b948f6b8fcbb231eef.webp?size=96",
			time: "2015",
			message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint animi enim pariatur dignissimos voluptatibus sequi nemo. Quisquam placeat, autem, doloribus amet porro ad voluptatem vero sequi repellat, et tenetur,
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint animi enim pariatur dignissimos voluptatibus sequi nemo. Quisquam placeat, autem, doloribus amet porro ad voluptatem vero sequi repellat, et tenetur!
			Illo dolorum reprehenderit adipisci eaque eveniet hic impedit nostrum unde voluptatem commodi qui vero non quis odit ducimus, et dolores sunt dolorem quam exercitationem ad expedita, vel aliquid nesciunt! Nostrum.
			Quas reiciendis sit quis optio, eligendi culpa eius facere soluta quasi rem, magni velit voluptates adipisci labore beatae esse veritatis perferendis eos vero sed debitis ab earum voluptate! Vel, accusamus. `,
		}
	]

	return (
		<main className="h-full w-full flex">

			{/* List after serverlist*/}
			<FriendList />


			{/* Main section to the right of the page*/}
			<div className="flex flex-col w-full h-full">

				<DMHeader search={search} setSearch={setSearch}/>

				{/* Container with main content */}
				<div className="flex h-full overflow-y-hidden">
					
					{/* Large content */}
					<div className="w-full z-0 h-full bg-discord-light flex flex-col ">

						<div className="h-full flex flex-col-reverse bg-discord-light scrollbar-thin scrollbar-track-discord-gray scrollbar-thumb-discord-dark overflow-y-scroll select-text">
							{messages.map((message: any, index: number) => (
								<Message key={message.id} {...message} />
							))}
						
						</div>

						<div className="w-full px-4 z-0 h-auto pt-5 pb-6  bg-discord-light relative overflow-hidden flex flex-col">
							<div className="flex w-full h-auto rounded-xl bg-discord-text-input items-center">
								<div className="w-12 h-full flex items-start justify-center py-3 mx-3">
									<AiFillPlusCircle size={35} color="#B9BBBE" className="cursor-pointer" />
								</div>
								<TextareaAutosize
									ref={inputRef}
									maxRows={5}
									wrap="soft"
									value={messageInput.replace(/(?:\r\n|\r|\n)/g, '')}
									onChange={(e) => setMessageInput(e.target.value.replace(/(?:\r\n|\r|\n)/g, ''))}
									placeholder="Message @Anden Etnisk Programmør" 
									className="w-full h-full overflow-y-scroll scrollbar-none z-40 text-white resize-none bg-transparent py-2 focus:outline-none" 
								/>
								<div className="flex items-start mr-5 space-x-3 h-full py-3">
									<AiFillGift size={35} className="cursor-pointer" color="#B9BBBE"/>
									<AiOutlineFileGif size={35} className="cursor-pointer" color="#B9BBBE"/>
								</div>
							</div>
							{loading && (
								<p className="text-discord-text-highlight font-bold text-sm pt-1 animate-pulse origin-center"><strong>Vocast CO-CEO</strong> is typing...</p>
							)}
						</div>
					</div>

				</div>

			</div>

		</main>
	)
}

export default FriendsDMPage
