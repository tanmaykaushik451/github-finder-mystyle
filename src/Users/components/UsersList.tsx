import React, { useState, useContext } from 'react'
import UserItem from './UserItem'
import { IUsersList } from '../interface/IUsersList'
import { Spinner } from 'react-bootstrap'
import GithubContext from "../../mycontext/GithubContext"

//@ts-ignore
const UsersList: React.FC = () => {
    const githubContext = useContext(GithubContext)

    const {users,loading} = githubContext.State

    if(loading){
        return(
            <div className="position-absolute" style={{left:"50%",right:"50%"}}>
                 <Spinner animation="border" role="status">
                     <span className="sr-only">Loading...</span>
                 </Spinner>
            </div>
        )
    }
    if(users !== []){
       return (
           users.map((user: any) => {
                        return (
                            <UserItem key={user.id} id={user.id} html_url={user.html_url} login={user.login} avatar_url={user.avatar_url} />
                        )
                    })
                    )
    }
}

export default UsersList
