import React from 'react'
import { Route, Switch } from 'react-router'
import ServerStartPage from './ServerStartPage'

const ServerPage = () => {
	return (
		<main className="h-full w-full flex">
			<Switch>
				<Route path="/server/:id" component={ServerStartPage}/>
			</Switch>
			
		</main>
	)
}

export default ServerPage
