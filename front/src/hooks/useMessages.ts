import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../database/firebase-connect";

export function useMessages(ref: string) {
	const [messages, setMessages] = useState<any>([])

	useEffect(() => {
		const q = query(collection(firestore, ref), orderBy("time"))
		const unSubscribe = onSnapshot(q, (messages) => {
			const mappedMessages = messages.docs.map(message => ({ ...message.data(), uid: message.id }))
			setMessages(mappedMessages)
		})

		return unSubscribe
	}, [setMessages, ref])

	return [messages]
}