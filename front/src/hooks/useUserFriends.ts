import { useEffect, useState } from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { firestore } from '../database/firebase-connect';

export default function useUserFriends(userUid: string) {
	const [userFriends, setFriends] = useState<any>([])
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		const ref = query(collection(firestore, `users`), where("friends", "array-contains", userUid))
		setLoading(true)
		const unSubscribe = onSnapshot(ref, (friends) => {

			const decryptedFriends = friends.docs.map(doc => {
				return { ...doc.data(), uid: doc.id }
			})
			
			setFriends(decryptedFriends)
			setLoading(false)			
		})

		return unSubscribe
	}, [setFriends, userUid, setLoading])

	return [userFriends, loading]
}