import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../database/firebase-connect';
import { signInWithEmailAndPassword } from "firebase/auth";


const LoginPage = () => {
	const history = useHistory()
	const [formInput, setFormInput] = useState({ email: '', password: '' })
	const [submitted, setSubmitted] = useState(false)
	const [error, setError] = useState({ state: false, message: "" })
	const [loading, setLoading] = useState(false) 

	useEffect(() => {
		if(!submitted) return
		setLoading(true)

		signInWithEmailAndPassword(auth, formInput.email, formInput.password)
		.catch((err) => {
			setLoading(false)
			setError({ state: true, message: error.message })
		})
		


	})

	const handleSubmitClick = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setSubmitted(true)
	}


	return (
		<div className="h-full w-full flex flex-col items-center justify-center bg-discord-purple">
			<div style={{ width: '850px', height: 'auto' }} className="p-8 grid grid-cols-3 gap-5 rounded-lg bg-discord-light">
				<form
					onSubmit={handleSubmitClick}
					className="w-full h-full flex flex-col col-span-2"
				>
					<h1 className="text-white text-2xl font-semibold mb-2">Welcome back!</h1>
					<p className="text-base text-discord-text-highlight font-semibold mb-5">This is a Clone of Discord</p>
					<div className="w-full h-full flex flex-col space-y-6 mb-6">
						<div className="flex flex-col">
							<span className="uppercase mb-2 font-bold text-discord-text-highlight text-xs">Email or username</span>
							<input 
								value={formInput.email}
								onChange={(e) => setFormInput({ ...formInput, email: e.target.value })}
								type="text" 
								className="bg-discord-gray px-2 p-3 text-white transition-all duration-500 font-semibold rounded border border-discord-dark outline-none focus:border-blue-500" 
							/>							
						</div>
						<div className="flex flex-col">
							<span className="uppercase mb-2 font-bold text-discord-text-highlight text-xs">Password</span>
							<input 
								value={formInput.password}
								onChange={(e) => setFormInput({ ...formInput, password: e.target.value })}
								type="password" 
								className="bg-discord-gray px-2 p-3 text-white transition-all duration-500 font-semibold rounded border border-discord-dark mb-1 outline-none focus:border-blue-500" 
							/>
							<p className="text-sm text-discord-blue font-semibold">Forgot your password?</p>
						</div>
					</div>
					<button
						type="submit"
						className="bg-discord-purple transition-all text-white font-bold px-2 py-3 rounded mb-2 hover:opacity-80"
					>
						Login
					</button>
					<p className="text-discord-text-secondary pointer-events-none">Need an account? <span className="text-discord-blue pointer-events-auto cursor-pointer">Register</span></p>
				</form>
				<div className="w-full h-full flex flex-col items-center justify-center">
					<img src="https://i.stack.imgur.com/YLy3V.png" className="rounded mb-8" width="80%" alt="" />
					<h1 className="text-white text-2xl font-bold mb-2">Log in with QR Code</h1>
					<p className="text-center text-discord-text-highlight">Scan this with <span className="font-bold">Discord Mobile <br /> app</span> to log in instantly.</p>
				</div>
			</div>
			{error && (
				<div style={{ width: '850px', height: 'auto' }}>
					<p>{ error.message }</p>
				</div>
			)}

			{loading && (
				<div style={{ width: '850px', height: 'auto' }}>
					<p>Loading...</p>
				</div>
			)}

		</div>
	)
}

export default LoginPage
