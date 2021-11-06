import { useEffect, useState } from "react";
import { firestore } from "../database/firebase-connect";
import { collection, onSnapshot, orderBy, query, doc, where, getDoc, getDocs, setDoc, addDoc } from "@firebase/firestore";

export function useDirectMessages (uid: string, friendUid: string) {
	const [chatRoomMessages, setChatRoomMessages] = useState<any>()
	const [chatRoomId, setChatRoomId] = useState<any>("")

	useEffect(() => {
		if (uid === "") return
		const objectUids: any = {}
		objectUids[uid] = null
		objectUids[friendUid] = null
		getDocs(query(collection(firestore, "direct_messages"), where("users", "==", objectUids))).then((docs) => {
			const chatRoomId = docs.docs[0]?.id

			if(chatRoomId){
				setChatRoomId(chatRoomId)
				const unSubscribe = onSnapshot(query(collection(firestore, `direct_messages/${chatRoomId}/messages`), orderBy("time")), (messages) => {
						const formattedMessages = messages.docs.map((message) => ({ 
							...message.data(),
							uid: message.id,
						}))
						setChatRoomMessages(formattedMessages)
				})
			} else {
				addDoc(collection(firestore, `direct_messages`), {
					users: objectUids
				})
			}

		})

	}, [uid, friendUid, setChatRoomMessages, setChatRoomId])

	return [chatRoomMessages, chatRoomId]
}