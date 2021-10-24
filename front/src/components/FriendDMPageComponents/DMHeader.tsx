import React, { useRef, useState } from 'react'
import { RiInboxFill } from 'react-icons/ri'
import { BsPinAngleFill } from 'react-icons/bs'
import { FaPhoneAlt, FaSearch, FaVideo, FaUserPlus } from 'react-icons/fa'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { MdClear } from 'react-icons/md'
import useClickOutside from '../../hooks/useClickOutside'

const iconConfig = {
	size: "25px",
	color: "#B9BBBE",
	className: "cursor-pointer"
}

const DMHeader = ({ search, setSearch, username }: any) => {
	const [searchPressed, setSearchPressed] = useState(false)
	const inputFieldRef = useRef<HTMLInputElement>(null)


	useClickOutside(inputFieldRef, () => {
		if(searchPressed === true) setSearchPressed(false)
	})
	
	const handleSearchClear = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
		e.stopPropagation()
		setSearch("")
		setSearchPressed(false)
	}

	return (
		<div className="h-14 flex-shrink-0 z-10 relative w-full grid grid-cols-3 shadow bg-discord-light px-4 overflow-x-hidden">
			<div className="col-span-2 flex items-center h-full w-full min-w-min">
				<span className="text-discord-text-secondary text-2xl mr-4 font-bold">@</span>
				<h1 className="font-bold text-white text-xl mr-2 truncate">{username}</h1>
				<div className="h-6 border-r border-discord-border mr-2"></div>
				<span className="bg-discord-dark text-discord-text-primary text-sm rounded-2xl px-2 mr-2">AKA</span>
				<p className="text-discord-text-primary truncate">Kims monument</p>
			</div>
			<div className="absolute w-auto h-full right-0 bg-discord-light flex items-center justify-end px-4 space-x-4">
				<FaPhoneAlt {...iconConfig}/>
				<FaVideo {...iconConfig}/>
				<BsPinAngleFill {...iconConfig}/>
				<FaUserPlus {...iconConfig}/>
				<div className={`relative ${(searchPressed) ? 'w-72' : 'w-52'} transition-all h-full flex items-center`}>
					{searchPressed ? (
						<MdClear onClick={handleSearchClear} className="absolute right-2 cursor-pointer" size={20} color="#72767D"/>

					) : (
						<FaSearch className="absolute right-2" size={14} color="#72767D"/>
					)}
					<input
						ref={inputFieldRef}
						onClick={() => setSearchPressed(true)}
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						type="text" 
						placeholder="Search"
						className="bg-discord-dark text-white placeholder-discord-text-secondary rounded-lg py-1 pl-2 pr-7 w-full focus:outline-none" 
					/>
				</div>

				<RiInboxFill  {...iconConfig}/>
				<AiFillQuestionCircle {...iconConfig} />
			</div>

		</div>
	)
}

export default DMHeader
