import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../assets/template.jpg'
const ActiveNowField = () => {
	return (
		<Link to="/friends/test" className="bg-discord-gray flex w-full p-4 rounded cursor-pointer hover:bg-discord-dark">
			<img src={img} className="rounded-full mr-4" width="50px" alt="" />
			<div className="flex flex-col justify-center">
				<h2 className="text-white text-base font-bold">Anden Etnisk Programmør</h2>
				<p className="text-gray-300 text-sm font-semibold">Lorem ipsum d</p>
			</div>
		</Link>
	)
}

export default ActiveNowField
