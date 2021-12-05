import { useRouter } from 'next/router'
import React from 'react'

export default function Details() {
	const router = useRouter()
	const id = router.query.id
	console.log(id)
	
	return (
		<div>
		
			{/* Task title, summary, details etc. */}
			<div className="box-border p-4 m-2 border-4 border-primary rounded">
				<p className="text-xl">Early morning yoga.</p>
				<br />
				<p className="text-lg">Summary: You have to get up early and stretch.</p>
				<br />
				<p className="text-lg overflow-hidden overflow-ellipsis">Details: The task must be done before the sun has completely risen. Breath of fresh air should
				make it even better. Record time and yourself and I will guide you.</p>
				<br />
				<hr />
				<p className="text-md">21-07-2021 21:45</p>
			</div>
			
			<div className="text-center">
				<p className="text-lg">Sub-tasks/Updates:</p>
			</div>
			
			{/* Sub-task title, summary, details etc. */}
			<div className="box-border p-4 m-2 border-4 border-primary rounded">
				<p className="text-xl">Early morning yoga.</p>
				<br />
				<p className="text-lg">Summary: You have to get up early and stretch.</p>
				<hr />
				<p className="text-md">21-07-2021 21:45</p>
			</div>
			
		</div>
	)
}
