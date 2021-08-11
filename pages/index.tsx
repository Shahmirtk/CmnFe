import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export default function Home() {
	const [showTab, setShowTab] = React.useState<bool>(true)
	
  return (
  	<>
      <Head>
        <title>Comentorinator</title>
        <meta name="description" content="A site for learning and teaching by doing tasks." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      	
      	{/* Tab buttons */}
      	<div className="flex flex-row m-2">
      		<button onClick={() => setShowTab(true)} className="mx-auto border-r border-l rounded border-secondary dark:border-primary w-full bg-primary hover:bg-secondary dark:bg-primary dark:hover:bg-secondary">Tasks</button>
      		<button onClick={() => setShowTab(false)} className="mx-auto border-r rounded border-secondary dark:border-primary w-full bg-primary hover:bg-secondary dark:bg-primary dark:hover:bg-secondary">Contests</button>
      	</div>
      	
      	{/* Tab 1 */}
    		<div style={{display: showTab ? 'block' : 'none'}} className="p-1">
    			{/* Task box*/}
    			<div className="box-border p-4 m-2 border-4 border-primary dark:border-primary rounded">
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
    		
      </main>

      <footer>
      </footer>
    </>
  )
}
