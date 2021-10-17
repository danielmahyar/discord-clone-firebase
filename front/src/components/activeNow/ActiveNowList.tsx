import React from 'react'
import ActiveNowField from './ActiveNowField'

const ActiveNowList = () => {
	return (
		<div className="hidden xl:block h-full w-96 flex-shrink-0 bg-gray-400 py-4 overflow-y-auto">
			<div className="w-11/12 mx-auto">
				<h1 className="text-2xl text-white font-bold mb-5">Active Now</h1>
				<div className="flex flex-col space-y-5">
					<ActiveNowField />
					<ActiveNowField />
					<ActiveNowField />
					<ActiveNowField />

				</div>
			</div>
		</div>
	)
}

export default ActiveNowList
