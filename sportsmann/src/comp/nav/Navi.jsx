import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './nav.css';

function Navi(){
    return(
        <div>
            <Navbar expand="lg" className="bg-body-warning"><Container>
                <Navbar.Brand href="#home">Sports Hub</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                <Nav.Link href='/'>Home Page</Nav.Link>
                <Nav.Link href='/news'>News</Nav.Link>
                <Nav.Link href='/events'>Events</Nav.Link>   
                <Nav.Link href='/teams'>Teams</Nav.Link>
                <Nav.Link href='/gallery'>Gallery</Nav.Link>
                <Link className="nav-link" to='/contact'>Contact</Link>
                </Nav>
                </Navbar.Collapse> 
                </Container>
            </Navbar>
        </div>
    );
}
export default Navi;