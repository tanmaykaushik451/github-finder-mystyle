import React from 'react'
import UsersList from './UsersList'
import Search from '../../UIElements/Search'


const Users: React.FC = () => { 
    return (
        <>
        <Search/>
            <div className="row m-0 my-2 position-relative">
                <UsersList />
            </div>            
        </>
    )
}

export default Users
