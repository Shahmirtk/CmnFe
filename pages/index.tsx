import { GetServerSideProps } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import React, { FormEvent } from 'react'

async function submitTask(token:string, body:string) {
	const res = await fetch('http://localhost:8000/tasks', {
		method: 'POST',
		headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
		body: body
	});
	const data = await res.json()
	console.log(data);
}

export default function Home(props:GetServerSideProps) {
	console.log(props.token)

	const tasksArr = []
	const contestsArr = []

	const [showTab, setShowTab] = React.useState<boolean>(true)

	// form related
	const [title, setTitle] = React.useState<string>('')
	const [summary, setSummary] = React.useState<string>('')
	const [detail, setDetail] = React.useState<string>('')
	const [category, setCategory] = React.useState<string>('Art')
	const [username, setUsername] = React.useState<string>('')
	const [isContest, setIsContest] = React.useState<boolean>(false)
	const [tags, setTags] = React.useState<string>()
	const submitForm = async (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const body = JSON.stringify({
			title: title,
			summary: summary,
			details: detail,
			main_category: category,
			user: username? username : null,
			is_contest: isContest,
			tags: tags? tags.split(',') : [],
		});
		submitTask(props.token, body);
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
      		<button onClick={() => setShowTab(false)} className="mx-auto border-r rounded w-full bg-gray-400 hover:bg-gray-300">Contests</button>
      	</div>
      	
      	{/* Tab 1 */}
    		<div style={{display: showTab ? 'block' : 'none'}} className="p-1">
				{/* New Task Form */}
				<div className="box-border rounded-md border-2 border-gray-400 p-4 m-2 content-center">
					<form onSubmit={submitForm}>
					<input onChange={(e) => setTitle(e.target.value)} value={title}
						type='text' autoComplete='title' placeholder='Title*'
						className='w-full mt-2 p-2 border text-center' required/>
					<textarea onChange={(e) => setSummary(e.target.value)} value={summary}
						autoComplete='summary' placeholder='Summary*'
						className='w-full mt-2 p-2 border' required/>
					<textarea onChange={(e) => setDetail(e.target.value)} value={detail}
						autoComplete='detail' placeholder='Details*'
						className='w-full mt-2 p-2 border' required/>
					<label htmlFor='category'>Category*: </label>
					<select onChange={(e) => setCategory(e.target.value)} value={category}
						className='mt-2' name='category' >
						<option value='Art'>Art</option>
						<option value='Academia'>Academia</option>
						<option value='Professions'>Professions</option>
					</select> <br />
					<label htmlFor='isContest'>Contest?</label>
					<input onChange={(e) => setIsContest(!isContest)} checked={isContest}
						type='checkbox' autoComplete='isContest'
						className='mt-4 ml-2 p-2 border' name='isContest'/>
					<br />
					<input onChange={(e) => setUsername(e.target.value)} value={username}
						type='text' autoComplete='username' placeholder="Mentee's username"
						className='w-1/4 mt-2 p-2 border'/> <br />
					<input onChange={(e) => setTags(e.target.value)} value={tags}
						className='border w-1/4 mt-2 p-2' placeholder='Tags (seperate by commas)'/>
					<div className='text-center mt-2'><button type='submit' className='rounded-md p-2 bg-gray-500 text-white'>Submit</button></div>
					</form>
				</div>

    			{/* Task box*/}
				{props.tasks.results.forEach(task => {
					tasksArr.push(<div className="box-border rounded-md border-2 border-gray-400 p-4 m-2">
						<p className="text-xl overflow-hidden overflow-ellipsis">{task.title}</p>
						<br />
						<p className="text-md overflow-hidden overflow-ellipsis">{task.summary}</p><br />
						<hr />
						<p className="text-md">{task.details}</p>
    				</div>)
				})}
					
				<div>{tasksArr}</div>
    			
    		</div>
    		
    		{/* Tab 2 */}

    		{/* Task box*/}
			<div style={{display: showTab ? 'none' : 'block'}} className="p-1">
					{props.contests.results.forEach(contest => {
						contestsArr.push(<div className="box-border rounded-md border-2 border-gray-400 p-4 m-2">
							<p className="text-xl overflow-hidden overflow-ellipsis">{contest.title}</p>
							<br />
							<p className="text-md overflow-hidden overflow-ellipsis">{contest.summary}</p><br />
							<hr />
							<p className="text-md">{contest.details}</p>
						</div>)
					})}
				
    			<div>{contestsArr}</div>
			</div>
      </main>

      <footer>
      </footer>
    </>
  )
}

export async function getServerSideProps() {
	const res = await fetch(`http://localhost:8000/api/token/`, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({'username': 'admin', 'password': 'xavier'}),
	})
	const data = await res.json()

	const res2 = await fetch(`http://localhost:8000/tasks`)
	const tasks = await res2.json()

	const res3 = await fetch(`http://localhost:8000/contests`)
	const contests = await res3.json()
  
	return {
	  props: {
		  token: data.access,
		  tasks: tasks,
		  contests: contests,
		}, // will be passed to the page component as props
	}
  }
  