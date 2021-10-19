import React from 'react'
import { AiFillCodeSandboxCircle } from 'react-icons/ai';
import { useHistory } from 'react-router';

const FriendsIcon = (props: any) => {
	const history = useHistory()

	const handleServerClick = (): void => history.replace("/friends");
 
	return (
	    <div className="transform transition cursor-pointer scale-100 hover:scale-105">
		   <AiFillCodeSandboxCircle onClick={handleServerClick} color={"white"} size={50}/>
	    </div>

	)
}

export default FriendsIcon
