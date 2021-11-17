import { useRouter } from 'next/router'
import React from 'react'

export default function Profile() {
	const router = useRouter()
	const username = router.query.username
	const [showTab, setShowTab] = React.useState<bool>(true)

	return (
		<div>
		
			{/* User bio, interests, etc. */}
			<div className="box-border p-4 m-2 border-4 border-gray-400 rounded">
				<p className="text-xl">Shahmir Khan</p>
				<p className="text-lg">"I think, therefore, I am."</p>
				<br />
				<p className="text-lg">Main interest: Profession</p>
				<p className="text-lg">Key interests: Web Dev, ML, DL, Existentialism, Ethics.</p>
				<br />
				<p className="text-lg">Contact: null#2052</p>
				<hr />
			</div>

			
				{/* Tab buttons */}
      	<div className="flex flex-row m-2">
      		<button onClick={() => setShowTab(true)} className="mx-auto border-r border-l rounded border-gray-300 w-full bg-gray-400 hover:bg-gray-300">Tasks</button>
      		<button onClick={() => setShowTab(false)} className="mx-auto border-r rounded border-gray-300 w-full bg-gray-400 hover:bg-gray-300">Contests</button>
      	</div>
      	
      	{/* Tab 1 */}
    		<div style={{display: showTab ? 'block' : 'none'}} className="p-1">
    			{/* Task box*/}
    			<div className="box-border p-4 m-2 border-4 border-gray-400 rounded">
    				<p className="text-xl overflow-hidden overflow-ellipsis">Title</p>
    				<br />
    				<p className="text-md overflow-hidden overflow-ellipsis">SummarySummarySummarySummarySummarySummary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary</p><br />
    				<hr />
    				<p className="text-md">21-07-2021 21:30</p>
    			</div>
    		</div>
    		
    		{/* Tab 2 */}
    		<div style={{display: showTab ? 'none' : 'block'}} className="p-1">
    			<div>Tab 2 data</div>
    		</div>
			
		</div>
	)
}
