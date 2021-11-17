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
      		<button onClick={() => setShowTab(true)} className="mx-auto border-r border-l rounded w-full bg-gray-400 hover:bg-gray-300">Tasks</button>
      		<button onClick={() => setShowTab(false)} className="mx-auto border-r rounded w-full border-gray-300 bg-gray-400 hover:bg-gray-300">Contests</button>
      	</div>
      	
      	{/* Tab 1 */}
    		<div style={{display: showTab ? 'block' : 'none'}} className="p-1">
    			{/* Task box*/}
    			<div className="box-border rounded-md border-2 border-gray-400 p-4 m-2">
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
    		
      </main>

      <footer>
      </footer>
    </>
  )
}
