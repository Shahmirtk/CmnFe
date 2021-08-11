import React, { useState } from 'react'

function useDarkMode() {
	const root = window.document.documentElement
	root.classList.add('dark')
}

export default function Navbar() {
	return (
		<div className="flex flex-row max-w-screen-xl mx-auto p-4 border-b rounded bg-primary dark:bg-secondary">
			<a href="#" className="mr-auto">Logo</a>
			<input type="text" name="search" className="ml-auto pl-1 border rounded bg-secondary dark:bg-primary" />
			<button onClick={() => useDarkMode()} className="ml-auto">Dark</button>
			<a href="#" className="ml-auto">Profile</a>
		</div>
	)
}
