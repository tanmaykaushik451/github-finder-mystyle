import React, { useState, useContext } from 'react'
import UsersList from './UsersList'
import { Row } from 'react-bootstrap'
import Search from '../../UIElements/Search'
import MyAlert  from '../../UIElements/MyAlert'
import { IAlert } from '../../UIElements/interface/IAlert'
import GithubContext from '../../mycontext/GithubContext'
import AlertContext from '../../mycontext/alert/AlertContext'

const Users: React.FC = () => {


    return (
        <>
        <Search/>
            <Row sm={1} md={2} lg={3}>
                <UsersList />
            </Row>
        </>
    )
}

export default Users
