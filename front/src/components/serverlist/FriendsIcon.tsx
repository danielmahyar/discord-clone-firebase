import React from 'react'
import { FaDiscord } from 'react-icons/fa';
import { useHistory } from 'react-router';

const FriendsIcon = (props: any) => {
	const history = useHistory()

	const handleServerClick = (): void => history.replace("/friends");
 
	return (
	    <div className="transform transition-all relative cursor-pointer rounded-3xl p-2 hover:bg-discord-purple bg-discord-gray group hover:rounded-2xl">
			<span className="absolute rounded top-1.5 z-50 -right-20 text-white p-2 font-bold bg-discord-dark transform scale-0 transition-all ease-in origin-left group-hover:scale-100">Home</span>
			<FaDiscord onClick={handleServerClick} color={"white"} size={35}/>
	    </div>

	)
}

export default FriendsIcon
