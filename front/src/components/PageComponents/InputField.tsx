import React, { useContext, useState } from 'react'
import { AiFillGift, AiFillPlusCircle, AiOutlineFileGif } from 'react-icons/ai'
import TextareaAutosize from 'react-textarea-autosize';
import useEventListener from '../../hooks/useEventListener';
import { CommContext } from '../../pages/IndexPage';

const InputField = ({ addMessage }: any) => {
	const [userTyping, setUserTyping] = useState(false)
	const [messageInput, setMessageInput] = useState("")
	const { user } = useContext(CommContext) 

	useEventListener("keydown", (e: any) => {
		if(e.key === "Enter" && messageInput.trim() !== "") {
		
			addMessage({
				userUid: user.uid,
				username: user.username,
				content: messageInput,
				img_url: user.img_url,
			})

			console.log(user)
			
			setMessageInput("")
		}
	})

	return (
		<div className="flex w-full h-auto rounded-xl bg-discord-text-input items-center">
			<div className="w-12 h-full relative group flex items-start justify-center py-3 mx-3">
				<span className="absolute transform scale-0 transition-all -top-5 overflow-hidden h-auto py-1 px-2 rounded bg-discord-dark text-white whitespace-nowrap z-20 group-hover:scale-100">Add File</span>
				<AiFillPlusCircle size={35} color="#B9BBBE" className="cursor-pointer" />
			</div>
			<TextareaAutosize
				maxRows={5}
				wrap="soft"
				value={messageInput.replace(/(?:\r\n|\r|\n)/g, '')}
				onChange={(e) => {
					setMessageInput(e.target.value.replace(/(?:\r\n|\r|\n)/g, ''))
					setUserTyping(true)
					setTimeout(() => setUserTyping(false), 3000);
				}}
				placeholder="Message @Anden Etnisk Programmør" 
				className="w-full h-full overflow-y-scroll scrollbar-none z-40 text-white resize-none bg-transparent py-2 focus:outline-none" 
			/>
			<div className="flex items-start mr-5 space-x-3 h-full py-3">
				<AiFillGift size={35} className="cursor-pointer" color="#B9BBBE"/>
				<AiOutlineFileGif size={35} className="cursor-pointer" color="#B9BBBE"/>
			</div>
		</div>
	)
}

export default InputField
