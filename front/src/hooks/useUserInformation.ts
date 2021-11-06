import { doc, onSnapshot } from '@firebase/firestore'
import { useEffect, useState } from 'react'
import { firestore } from '../database/firebase-connect'


export function useUserInformation(uid: string) {
	const [user, setUser] = useState<any>({ })

	useEffect(() => {
		const unSubscribe = onSnapshot(doc(firestore, `users/${uid}`), (userInfo) => {
			setUser({ ...userInfo.data(), uid: userInfo.id })
		})

		return unSubscribe
	}, [setUser, uid])

	return [user]
}