import Head from 'next/head'
import Image from 'next/image'
import React, { FormEvent } from 'react'

export default function Home() {
	const [showTab, setShowTab] = React.useState<boolean>(true)

	// form related
	const [title, setTitle] = React.useState<string>('')
	const [summary, setSummary] = React.useState<string>('')
	const [detail, setDetail] = React.useState<string>('')
	const submitForm = async (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		alert(`Title: ${title} \n Summary: ${summary} \n Detail: ${detail}`)
	}
	
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
				{/* New Task Form */}
				<div className="box-border rounded-md border-2 border-gray-400 p-4 m-2 content-center">
					<form onSubmit={submitForm}>
					<input onChange={(e) => setTitle(e.target.value)} value={title}
						type='text' autoComplete='title' placeholder='Title'
						className='w-full mt-2 p-2 border' required/>
					<input onChange={(e) => setSummary(e.target.value)} value={summary}
						type='text' autoComplete='summary' placeholder='Summary'
						className='w-full mt-2 p-2 border' required/>
					<textarea onChange={(e) => setDetail(e.target.value)} value={detail}
						autoComplete='detail' placeholder='Detail'
						className='w-full mt-2 p-2 border' required/>
					<div className='text-center mt-2'><button type='submit' className='border p-2'>Submit</button></div>
					</form>
				</div>

    			{/* Task box*/}
    			<div className="box-border rounded-md border-2 border-gray-400 p-4 m-2">
    				<p className="text-xl overflow-hidden overflow-ellipsis">Title</p>
    				<br />
    				<p className="text-md overflow-hidden overflow-ellipsis">SummarySummarySummarySummarySummarySummary Summary Summary Summary Summary Summary Summary
					Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary</p><br />
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
