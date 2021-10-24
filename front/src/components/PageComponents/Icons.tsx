import React from 'react'
import { IconType } from 'react-icons'

type PropsType = {
	Icon: IconType;
	tooltipText?: string;
	tooltipLocation?: string;
	onClick: (event: MouseEvent) => void;
	iconConfig: any;
	classExtra?: string;
}

const Icons = (props: PropsType) => {
	 const { 
		Icon,
		tooltipText,
		tooltipLocation = "-top-8",
		onClick = () => {}, 
		iconConfig = { 
			size: 25, 
			color: "white"
		},
		classExtra = ""
	} = props

	return (
		<div className="w-full group h-full relative flex items-center justify-center z-50 hover:bg-discord-text-secondary">
			<span className={`absolute transform scale-0 transition-all w-auto bg-discord-dark text-white rounded font-semibold px-2 py-1 ${tooltipLocation} group-hover:scale-100`}>{tooltipText}</span>
			<Icon
				{...iconConfig}
				onClick={onClick}
				className={`cursor-pointer ${classExtra}`}
			/>
		</div>
	)
}

export default Icons
