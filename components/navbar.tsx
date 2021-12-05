import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
	return (
		<div className="flex flex-row bg-gray-500">
			{/* logo */}
			<div className='ml-2'>
				<Link href="/">
					<a>
						<Image src='/vercel.svg' alt='Logo' width="65" height="65"></Image>
					</a>
				</Link>
			</div>

			{/* search */}
			<input type="text" name="search" className="p-1 mx-auto mb-auto mt-auto w-1/2 h-2/3 border rounded bg-gray-300" />

			{/* profile */}
			<div className='mr-2'>
				<Link href="/">
					<a>
						<Image src='/brain.svg' alt='Brain' width="65" height="65"></Image>
					</a>
				</Link>
			</div>
		</div>
	)
}
