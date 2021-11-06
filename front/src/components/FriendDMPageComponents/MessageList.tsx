import { useEffect, useRef } from 'react'
import Message from './Message';

const MessageList = ({ messages }: any) => {
	const scrollRef = useRef<any>(null)

	return (
		<div className="h-full z-0 flex flex-col bg-discord-light scrollbar-thin scrollbar-track-discord-gray scrollbar-thumb-discord-dark overflow-y-scroll overflow-x-hidden select-text">
			{messages && messages.length > 0 && messages.map((message: any, index: number) => {
				const showImg = (messages[index - 1]?.userUid === message.userUid) ? false : true
				return (
					<Message
						key={message.uid}
						showImg={showImg}
						message={message}
					/>
				)
			})}
			<div ref={scrollRef}></div>
		</div>
	)
}

export default MessageList
