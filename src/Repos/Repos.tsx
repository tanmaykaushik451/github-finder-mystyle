import React, { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import GithubContext from '../mycontext/GithubContext'

export interface IReposItem {
    name: string
    id: string
    html_url: string
}


const Repos: React.FC = () => {

    const githubContext = useContext(GithubContext)

    const {repos} = githubContext.State

    return (
        <Row className="my-2 text-center justify-center mx-0" style={{ border: "1px solid lightgrey", padding: "1rem" }}>
            
                {repos.map((repo: IReposItem) => {
                    return (
                        <Col key={repo.id} style={{ border: "1px solid lightgrey", padding: "1rem" }} md={12} sm={6}>
                        <a href={repo.html_url} >{repo.name}</a>
                        </Col>
                    )
                })}
        </Row>

    )
}

export default Repos
