import { useRouter } from 'next/router'
import React from 'react'

export default function Profile() {
	const router = useRouter()
	const username = router.query.username
	const [showTab, setShowTab] = React.useState<bool>(true)

	return (
		<div>
		
			{/* User bio, interests, etc. */}
			<div className="box-border p-4 m-2 border-4 border-primary dark:border-secondary rounded">
				<p className="text-xl dark:text-primary">Shahmir Khan</p>
				<p className="text-lg dark:text-primary">"I think, therefore, I am."</p>
				<br />
				<p className="text-lg dark:text-primary">Main interest: Profession</p>
				<p className="text-lg dark:text-primary">Key interests: Web Dev, ML, DL, Existentialism, Ethics.</p>
				<br />
				<p className="text-lg dark:text-primary">Contact: null#2052</p>
				<hr />
			</div>

			
				{/* Tab buttons */}
      	<div className="flex flex-row m-2">
      		<button onClick={() => setShowTab(true)} className="mx-auto border-r border-l rounded border-secondary dark:border-primary w-full bg-primary hover:bg-secondary dark:bg-primary dark:hover:bg-secondary">Tasks</button>
      		<button onClick={() => setShowTab(false)} className="mx-auto border-r rounded border-secondary dark:border-primary w-full bg-primary hover:bg-secondary dark:bg-primary dark:hover:bg-secondary">Contests</button>
      	</div>
      	
      	{/* Tab 1 */}
    		<div style={{display: showTab ? 'block' : 'none'}} className="p-1">
    			{/* Task box*/}
    			<div className="box-border p-4 m-2 border-4 border-primary dark:border-secondary rounded">
    				<p className="text-xl overflow-hidden overflow-ellipsis dark:text-primary">Title</p>
    				<br />
    				<p className="text-md dark:text-primary overflow-hidden overflow-ellipsis">SummarySummarySummarySummarySummarySummary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary</p><br />
    				<hr />
    				<p className="text-md dark:text-primary">21-07-2021 21:30</p>
    			</div>
    		</div>
    		
    		{/* Tab 2 */}
    		<div style={{display: showTab ? 'none' : 'block'}} className="p-1">
    			<div>Tab 2 data</div>
    		</div>
			
		</div>
	)
}
