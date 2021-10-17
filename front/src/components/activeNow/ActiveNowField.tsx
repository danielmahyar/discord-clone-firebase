import React from 'react'
import img from '../../assets/template.jpg'
const ActiveNowField = () => {
	return (
		<div className="bg-gray-700 flex w-full p-4 rounded cursor-pointer hover:bg-gray-800">
			<img src={img} className="rounded-full mr-4" width="50px" alt="" />
			<div className="flex flex-col justify-center">
				<h2 className="text-white text-base font-bold">Anden Etnisk Programmør</h2>
				<p className="text-gray-300 text-sm font-semibold">Lorem ipsum d</p>
			</div>
		</div>
	)
}

export default ActiveNowField
