import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-info">
            <Link to="/" className="navbar-brand text-white">
                <i className="fa fa-rocket" aria-hidden="true"></i>
                  {""} GitFinder
                </Link>
            <Navbar.Toggle aria-controls="navbar-links" />
            <Navbar.Collapse id="navbar-links">
                <Nav className="ml-auto">
                    <Link className="text-white nav-link" to="/About">About</Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default Navigation
