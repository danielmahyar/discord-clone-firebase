import { firestore } from "./firebase-connect"
import { doc, addDoc, collection, Timestamp, updateDoc } from "firebase/firestore"; 

export const changeStatus = async (uid: string, status: string) => {
	if(!uid) return
	console.log("I am being run: " + status)
	try {
		await updateDoc(doc(firestore, `users/${uid}`), {
			status
		})
	} catch (error) {
		console.log(error)
	}
}

export const sendMessage = async (ref: string, messageData: any) => {
	const { img_url, content, userUid, username } = messageData

	try {
		console.log(ref)
		await addDoc(collection(firestore, ref), {
			username,
			userUid,
			content,
			img_url,
			time: Timestamp.now()
		})
	} catch (error) {
		
	}
}
