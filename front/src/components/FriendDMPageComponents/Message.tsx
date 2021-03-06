import { BsFillEmojiSmileFill } from 'react-icons/bs'
import Icons from '../PageComponents/Icons'

type Props = {
	message: {
		img_url: string;
		content: string;
		username: string;
		time: any;
	}
	showImg: boolean;
}

const iconValues = {
	Icon: BsFillEmojiSmileFill,
	onClick: (): void => {
		console.log("Test")
	},
	iconConfig: {
		size: 25,
		color: "#B9BBBE",
	},
	tooltipText: "Message"
}

const Message = ({ message, showImg }: Props) => {
	const { img_url, content, username, time } = message
	const mappedTime = time.toDate()
	return (
		<div className={`w-full flex z-0 relative group items-center px-4 py-1 select-text hover:bg-discord-gray ${showImg ? 'mt-2' : ''}`}>
			{/* <div className="w-28 h-10 absolute flex items-center justify-between space-x-1 -top-2 right-5 transform scale-0 border rounded bg-discord-light border-discord-gray group-hover:scale-100">
				<Icons 
					{...iconValues}
				/>
				<Icons 
					{...iconValues}
				/>
				<Icons 
					{...iconValues}
				/> */}
				{/* <BsFillEmojiSmileFill {...iconConfig}/>
				<FaReply {...iconConfig}/>
				<BsThreeDots {...iconConfig}/> */}
			{/* </div> */}
			<div className="w-12 flex-shrink-0 h-full ml-4 flex items-start justify-end">
				{showImg && (
					<img 
						src={img_url} 
						className="rounded-full mr-5 object-cover cursor-pointer"
						width="50px"
						alt="" 
					/>
				)}

			</div>
			<div className="flex flex-col w-full">
				<div className="flex items-end">
					{showImg && (
						<h2 className="text-white font-semibold text-lg mr-2 cursor-pointer">{username}</h2>
					)}
					<span className="text-discord-text-secondary text-sm select-none">{(showImg) && `${mappedTime.getHours()}:${mappedTime.getMinutes()}:${mappedTime.getSeconds()}`}</span>										
				</div>
				<p className="text-discord-text-para ">{content}</p>
			</div>
		</div>
	)
}

export default Message

	
	//className: "cursor-pointer p-2 bg-transparent hover:bg-discord-hover h-full w-full",