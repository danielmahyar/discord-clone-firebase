import React, { useContext, useState } from 'react';
import { IoSettingsSharp } from 'react-icons/io5'
import { BsHeadphones } from 'react-icons/bs'
import { TiMicrophone } from 'react-icons/ti'
import { BiMicrophoneOff } from 'react-icons/bi'
import { CommContext } from '../../pages/IndexPage';
import { useHistory } from 'react-router';

interface Props {
}

const UserFooter = (props: Props) => {
	const [isMicrophoneOn, setMicrophoneOn] = useState(false)
    const { user, setUser, changeStatus } = useContext(CommContext)

	const handleMicrophoneClick = (): void => {
		setMicrophoneOn(prev => !prev)
	}

    return (
        <div className="h-16 pl-2 pr-4 bg-discord-user flex items-center flex-shrink-0">
            <div className="flex w-32 mr-2">
                <div className="flex items-center mr-2">
                    <img src={user.img_url} className="rounded-full cursor-pointer" width="50px" alt="" />
                </div>
                <div className="flex w-full flex-col truncate">
                    <h2 className="text-white font-bold text-sm truncate">{user.username}</h2>
                    <p className="text-gray-500 text-xs truncate">{(user.sub_text) ? user.sub_text : `#${user.numberId}`}</p>
                </div>
            </div>

            <div className="flex h-full items-center">
                {isMicrophoneOn ? (
                    <TiMicrophone size={38} color="#B9BBBE" className="cursor-pointer rounded py-2 hover:bg-discord-hover" onClick={handleMicrophoneClick}/>

                ) : (
                    <BiMicrophoneOff size={38} color="#B9BBBE" className="cursor-pointer rounded py-2 hover:bg-discord-hover" onClick={handleMicrophoneClick}/>
                )}

                <BsHeadphones size={38} color="#B9BBBE" className="cursor-pointer rounded py-2 hover:bg-discord-hover" />
                <IoSettingsSharp
                    onClick={() => {
                        changeStatus({ variables: {
                            userUid: localStorage.getItem('userUid'),
                            status: 'offline'
                        }})
                        localStorage.removeItem('userUid')
                        setUser(null)
                    }}
                    size={38} 
                    color="#B9BBBE" 
                    className="cursor-pointer rounded py-2 hover:bg-discord-hover" 
                />
            </div>
        </div>
    )
};

export default UserFooter;
