import React, { useState } from 'react'

export default function Navbar() {
	return (
		<div className="flex flex-row max-w-screen-xl mx-auto p-2 border-b rounded bg-gray-400">
			<a href="#" className="mr-auto">Logo</a>
			<input type="text" name="search" className="p-1 w-1/2 border rounded bg-gray-300" />
			<a href="#" className="ml-auto">Profile</a>
		</div>
	)
}
