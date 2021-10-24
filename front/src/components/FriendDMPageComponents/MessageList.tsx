import React, { useEffect } from 'react'
import Message from './Message';

const MessageList = ({ subscripeToMoreMessages, ...result }: any) => {
	const { data, loading } = result;
	const messages = (!loading) ? data.getMessages : [];

	useEffect(() => subscripeToMoreMessages(), [subscripeToMoreMessages])

	return (
		<div className="h-full z-0 flex flex-col bg-discord-light scrollbar-thin scrollbar-track-discord-gray scrollbar-thumb-discord-dark overflow-y-scroll overflow-x-hidden select-text">
			{messages && messages.length > 0 && messages.map((message: any) => (
				<Message
					key={message.uid}
					{...message}
				/>
			))}
		</div>
	)
}

export default MessageList
