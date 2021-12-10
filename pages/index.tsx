import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import { taskForm } from './forms';
import { ITask } from '../interfaces/interfaces';

export default function Home(props:IProps) {
	const tasksArr:Array<JSX.Element> = []
	const contestsArr:Array<JSX.Element> = []

	const [showTab, setShowTab] = React.useState<boolean>(true)
	
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

		{/* New Task Form */}
		{taskForm(props.token)}
      	
			{/* Tab 1 */}
			{/* Task box*/}
    		<div style={{display: showTab ? 'block' : 'none'}} className="p-1">
				{props.tasks.forEach((task:ITask) => {
					tasksArr.push(taskBox(task))
				})}
					
				<div>{tasksArr}</div>	
    		</div>
    		
    		{/* Tab 2 */}
    		{/* Task box*/}
			<div style={{display: showTab ? 'none' : 'block'}} className="p-1">
				{props.contests.forEach((contest:ITask) => {
					contestsArr.push(taskBox(contest))
				})}
				
    			<div>{contestsArr}</div>
			</div>

      </main>

      <footer>
      </footer>
    </>
  )
}

function taskBox(task:ITask) {
	const rawTime = new Date(task.time)
	const procTime = rawTime.toLocaleString("default", {timeStyle:"short", dateStyle:"short"})

	return (
		<div className="box-border rounded-md border-2 border-gray-400 p-4 m-2">
			<p className="text-xl overflow-hidden overflow-ellipsis">{task.title}</p>
			<br />
			<p className="text-md overflow-hidden overflow-ellipsis">{task.summary}</p><br />
			<hr />
			<p className="text-md">{procTime}</p>
		</div>
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
		  tasks: tasks.results? tasks.results : "",
		  contests: contests.results? contests.results : "",
		}, // will be passed to the page component as props
	}
  }

interface IProps {
	token: string,
	tasks: Array<ITask>,
	contests: Array<ITask>,
}
