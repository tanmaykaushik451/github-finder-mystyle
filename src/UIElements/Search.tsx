import React, { useState, useContext } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import { IAlert } from './interface/IAlert'
import GithubContext from '../mycontext/GithubContext'
import AlertContext from '../mycontext/alert/AlertContext'

// export interface IsearchUsers{
//     showAlert : (variant : IAlert["variant"],text: string)=>void
// }

const Search : React.FC = (props) => {

    const githubContext = useContext(GithubContext)

    const {users} = githubContext.State

    const [search,setsearch] = useState('')
    
    const changehandler=( e: React.ChangeEvent<HTMLInputElement>)=>{
        setsearch(e.target.value)
    }

    const handlesubmit =(e  : React.FormEvent<HTMLFormElement>)=>{
        githubContext.searchusers(search);
        e.preventDefault()
    }
    return (
        <div>
            <Form className="mb-2" onSubmit={handlesubmit}>
                <FormControl className="mb-2" type="text" placeholder="Search User" value={search} onChange={changehandler}/>
                <Button onClick={()=>handlesubmit} variant="primary" type="submit">Search</Button>
            </Form>
            {users.length>0 && <Button onClick={githubContext.clearUsers} variant="danger">Clear users</Button>}
        </div>
    )
}

export default Search
