import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import DMHeader from '../../components/FriendDMPageComponents/DMHeader'
import FriendList from '../../components/FriendPageComponents/FriendList/FriendList'
import useEventListener from '../../hooks/useEventListener';
import { useQuery, gql, useMutation } from '@apollo/client';
import MessageList from '../../components/FriendDMPageComponents/MessageList';
import InputField from '../../components/PageComponents/InputField';
import { CommContext, FriendInformation } from '../IndexPage';
console.log("EEE")

const GET_MESSAGES = gql`
	query getMessages($chatId: String!) {
		getMessages(chatId: $chatId) {
			uid,
			userUid,
			username,
			img_url,
			content
		}
	}

`

const ADD_MESSAGE = gql`
	mutation SubmitMessage(
		$userUid: String!
		$content: String!
		$username: String!
		$img_url: String!
	) {
		messageAdd(
			userUid: $userUid
			content: $content
			username: $username
			img_url: $img_url
		) {
			content
		}
	}
`

const MESSAGE_SUBSCRIPTION = gql`
	subscription SubscripeToChat($chatId: String!){
		messageAdded(chatId: $chatId){
			uid,
			userUid,
			username,
			img_url,
			content
		}
	}
`

const FriendsDMPage = () => {
	const params: { uid: string } = useParams()
	const friendContext: any = useContext(CommContext)
	const DMFriend: FriendInformation = (!friendContext.friends.loading) ? friendContext.friends.friendsArray.find((friend: FriendInformation) => params.uid === friend.uid) : { }
	const [search, setSearch] = useState("")
	const [messageInput, setMessageInput] = useState("")
	const {  subscribeToMore, ...result } = useQuery(GET_MESSAGES, { 
		variables: { chatId: params.uid }
	})
	const [addMessage] = useMutation(ADD_MESSAGE);

	useEventListener("keydown", (e: any) => {
		if(e.key === "Enter" && messageInput.trim() !== "") {
		
			addMessage({ variables: {
				userUid: "61734abf9f483ecbded895ac",
				username: "Anden Etnisk Programmør",
				content: messageInput,
				img_url: "https://cdn.discordapp.com/avatars/345248360577368064/e16bd50df43ab3b948f6b8fcbb231eef.webp?size=96",
			}})
			
			setMessageInput("")
		}
	})

	return (
		<main className="h-full w-full flex">

			{/* List after serverlist*/}
			<FriendList />

			{/* Main section to the right of the page*/}
			<div className="flex flex-col w-full h-full">

				<DMHeader 
					search={search} 
					setSearch={setSearch}
					username={DMFriend?.username || "Test"}
				/>

				{/* Container with main content */}
				<div className="flex h-full overflow-y-hidden">
					
					{/* Large content */}
					<div className="w-full z-0 h-full bg-discord-light flex flex-col ">

						<MessageList 
							{...result}
							subscripeToMoreMessages={() => 
								subscribeToMore({
									document: MESSAGE_SUBSCRIPTION,
									variables: {
										chatId: params.uid
									},
									updateQuery: (prev, { subscriptionData }) => {
										if (!subscriptionData.data) return prev;
										const newFeedItem = subscriptionData.data.messageAdded;
										const newMessages = [...prev.getMessages, newFeedItem]
										return { getMessages: newMessages }
									}
								})
							}
						/>

						<div className="w-full px-4 z-0 h-auto pt-5 pb-6  bg-discord-light relative overflow-hidden flex flex-col">
							<InputField 
								addMessage={addMessage}
							/>
							{/* <div className="flex w-full h-auto rounded-xl bg-discord-text-input items-center">
								<div className="w-12 h-full relative group flex items-start justify-center py-3 mx-3">
									<span className="absolute transform scale-0 transition-all -top-5 overflow-hidden h-auto py-1 px-2 rounded bg-discord-dark text-white whitespace-nowrap z-20 group-hover:scale-100">Add File</span>
									<AiFillPlusCircle size={35} color="#B9BBBE" className="cursor-pointer" />
								</div>
								<TextareaAutosize
									ref={inputRef}
									maxRows={5}
									wrap="soft"
									value={messageInput.replace(/(?:\r\n|\r|\n)/g, '')}
									onChange={(e) => {
										setMessageInput(e.target.value.replace(/(?:\r\n|\r|\n)/g, ''))
										setLoading(true)
									}}
									placeholder="Message @Anden Etnisk Programmør" 
									className="w-full h-full overflow-y-scroll scrollbar-none z-40 text-white resize-none bg-transparent py-2 focus:outline-none" 
								/>
								<div className="flex items-start mr-5 space-x-3 h-full py-3">
									<AiFillGift size={35} className="cursor-pointer" color="#B9BBBE"/>
									<AiOutlineFileGif size={35} className="cursor-pointer" color="#B9BBBE"/>
								</div>
							</div> */}
							{/* {loading2 && (
								<p className="text-discord-text-highlight font-bold text-sm pt-1 animate-pulse origin-center"><strong>{params.uid}</strong> is typing...</p>
							)} */}
						</div>
					</div>

				</div>

			</div>

		</main>
	)
}

export default FriendsDMPage
