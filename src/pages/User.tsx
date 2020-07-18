import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
import { Spinner, Row, Card, Image, Col, Button, Badge } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Repos from '../Repos/Repos'
import GithubContext from '../mycontext/GithubContext'

const User: React.FC = () => {
    const { login } = useParams()

    const githubContext = useContext(GithubContext)

    const { user, loading, repos } = githubContext.State

    const { getuser, getuserrepos } = githubContext

    useEffect(() => {
        getuser(login)
        getuserrepos(login)
        //eslint-disable-next-line
    }, [])

    return (
        <>
            {loading && <div className="justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>}
            {!loading && user !== null && (
                <>
                    <Link to="/" className="btn btn-light" >Back to Search</Link>
                    <Row className="my-2 mx-0" style={{ border: "1px solid lightgrey", padding: "1rem" }}>
                        <Col className="text-center" sm={12} md={6}>
                            <Image src={user.avatar_url} style={{ width: '150px' }} alt="asd" roundedCircle />
                            <h2>{user.name}</h2>
                            <p>{user.location}</p>
                        </Col>
                        <Col sm={12} md={6}>
                            <h2>Bio</h2>
                            <p>{user.bio}</p>
                            <Button variant="dark" className="text-white" href={user.html_url}>Visit Github Profile</Button>
                            <ul style={{ listStyle: 'none', paddingInlineStart: '0px', marginTop: '0.3rem' }}>
                                <li> {user.name && <p>username : {user.name}</p>}</li>
                                <li> {user.company && <p>company : {user.company}</p>}</li>
                                <li>{user.blog && <p>website : <a href={user.blog}>{user.blog}</a></p>}</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="justify-content-center my-2 py-2 mx-0" style={{ border: "1px solid lightgrey" }}>
                        <Badge variant="primary">Followers : {user.followers}</Badge>
                        <Badge variant="secondary">Following : {user.following}</Badge>
                        <Badge variant="warning">Public Repos :{user.public_repos}</Badge>
                        <Badge variant="dark">Public_Gists : {user.public_gists}</Badge>
                    </Row>
                    {repos !== [] && <Repos />}
                </>
            )}
        </>
    )

}

export default User
