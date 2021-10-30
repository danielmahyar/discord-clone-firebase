import { BiMessage, BiDotsVerticalRounded } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FriendInformation } from '../../../pages/IndexPage'


const FriendOnlineListField = (props: FriendInformation) => {
	const { uid, username, img_url, sub_text, status } = props

	return (
		<Link to={`/friends/${uid}`} className="w-full px-3 transition-all ease-in py-4 border-t border-discord-border flex items-center justify-between cursor-pointer hover:bg-discord-hover">
			<div className="flex items-center">
				<div className="flex items-center relative mr-4">
					{(() => {
						switch (status) {
							case "online":
								return <div className="absolute h-5 w-5 bg-green-600 rounded-full border-4 border-discord-light -bottom-2 right-0"></div>
							case "offline":
								return <div className="absolute h-5 w-5 bg-discord-user-offline rounded-full border-4 border-discord-light -bottom-2 right-0"></div>
							default:
								return <div className="absolute h-5 w-5 bg-discord-user-offline rounded-full border-4 border-discord-light -bottom-2 right-0"></div>
						}
					})()}
					<img src={img_url} className="rounded-full select-none pointer-events-none" alt="" width="50px" />
				</div>
				<div className="flex flex-col justify-center">
					<h2 className="text-white text-base font-bold select-none">{username}</h2>
					<p className="text-gray-300 text-sm font-semibold select-none">{(sub_text) ? sub_text : `The user is ${status}` }</p>
				</div>
			</div>

			<div className="flex items-center space-x-2 ">
				<div className="rounded-full p-2 relative bg-discord-gray group hover:bg-discord-dark">
					<span className="absolute transform scale-0 transition-all ease-in text-white px-2 py-1 rounded w-auto min-w-max bg-discord-dark -top-10 -translate-x-7 group-hover:scale-100">Message</span>
					<BiMessage size="20" color="#B9BBBE"  fill="#B9BBBE" />
					
				</div>
				<div className="rounded-full p-2 relative bg-discord-gray group hover:bg-discord-dark">
					<span className="absolute transform scale-0 transition-all ease-in text-white px-2 py-1 rounded w-auto min-w-max bg-discord-dark -top-10 -translate-x-7 group-hover:scale-100">Message</span>
					<BiDotsVerticalRounded size="20" color="#B9BBBE"/>
				</div>
			</div>
		</Link>
	)
}

export default FriendOnlineListField
