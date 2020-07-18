import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { IUsers } from '../interface/IUsers'
import {Link} from "react-router-dom"

const UserItem : React.FC<IUsers> = (props) => {
    
    return (
            <Card id="card" className="col-xs-1 col-sm-6 col-md-4  col-lg-3 p-0">
                <Card.Img variant="top" src={props.avatar_url} alt="avatar"></Card.Img>
                <Card.Body>
                    <Card.Title>
                        {props.login}
                    </Card.Title>
                    <Card.Footer className="bg-light">
                        <Link className="btn btn-info" to={`/users/${props.login}`}>More</Link>
                    </Card.Footer>
                </Card.Body>
            </Card>            
    )
}

export default UserItem
