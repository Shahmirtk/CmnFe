import React from 'react'

export function taskForm(token:string) {

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
		submitTask(token, body);
	}

    async function submitTask(token:string, body:string) {
        const res = await fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
            body: body
        });
        const data = await res.json()
        console.log(data);
    }

    return (
        <div className="box-border rounded-md border-2 border-gray-400 p-4 m-2 content-center">
            <form onSubmit={submitForm}>
                <input onChange={(e) => setTitle(e.target.value)} value={title}
                    type='text' autoComplete='title' placeholder='Title*'
                    className='w-full mt-2 p-2 border text-center' required/>
                <textarea onChange={(e) => setSummary(e.target.value)} value={summary}
                    autoComplete='summary' placeholder='Summary*' rows={3}
                    className='w-full mt-2 p-2 border' required/>
                <textarea onChange={(e) => setDetail(e.target.value)} value={detail}
                    autoComplete='detail' placeholder='Details*' rows={10}
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
                <div className='text-center mt-2'>
                    <button type='submit' className='rounded-md p-2 bg-gray-500 text-white'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export function bidForm(token:string) {
    const [title, setTitle] = React.useState<string>('')
	const [detail, setDetail] = React.useState<string>('')
    const [show, setShow] = React.useState<boolean>(true)

    const submitForm = async (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const body = JSON.stringify({
			title: title,
			details: detail,
		});
		submitBid(token, body);
	}

    async function submitBid(token:string, body:string) {
        const res = await fetch('http://localhost:8000/bids', {
            method: 'POST',
            headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
            body: body
        });
        const data = await res.json()
        console.log(data);
    }

    return (
        <div className="box-border rounded-md border-2 border-gray-400 p-4 m-2 fixed left-1/3 right-1/3 bottom-1/3"
          style={{display: show? "block" : "none"}}>
            <form onSubmit={submitForm} onReset={() => setShow(false)}>
                <input onChange={(e) => setTitle(e.target.value)} value={title}
                    type='text' autoComplete='title' placeholder='Title*'
                    className='w-full mt-2 p-2 border text-center' required/>
                <textarea onChange={(e) => setDetail(e.target.value)} value={detail}
                    autoComplete='detail' placeholder='Details*' rows={10}
                    className='w-full mt-2 p-2 border' required/>
                <br />
                <div className='flex flex-row text-center mt-2'>
                    <button type='submit' className='rounded-md p-2 bg-gray-500 text-white'>Submit</button>
                    <button type='reset' className='rounded-md p-2 ml-2 bg-yellow-500 text-white'>Cancel</button>
                </div>
            </form>
        </div>
    )
}