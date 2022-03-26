import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container';


export default function Header() {
  return (
    <header id='header'>
        <Container className="d-flex">
        <Nav.Link as={Link} to="/" className='col-6'>
            <img
              src="/logo192.png"
              className="d-inline-block align-top logo-header"
              alt="Las yerberas logo"
            />
        </Nav.Link>
      <Navbar collapseOnSelect expand="lg" id='navBar-header' className='col-6 flex-end'>
       <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className='navegacion' as={Link} to="/" ><i className="bi bi-house-door-fill"></i> Home</Nav.Link>
                <Nav.Link className='navegacion'
                  as={Link} to="/services">Servicios</Nav.Link>
                <Nav.Link className='navegacion' as={Link} to="/about" >Sobre mí</Nav.Link>
                <Nav.Link className='navegacion' as={Link} to="/contact">Contacto</Nav.Link>               
              </Nav>
            </Navbar.Collapse>
       </div>
      </Navbar>
        </Container>
    </header>
  )
}
