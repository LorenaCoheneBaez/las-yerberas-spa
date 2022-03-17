import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


export default function Header() {
  return (
    <header>
        <Container className="d-flex">
          <a href="/" className='col-6'>
            <img
              src="/logo192.jpg"
              className="d-inline-block align-top logo-header"
              alt="Las yerberas logo"
            />
            </a>
      <Navbar collapseOnSelect expand="lg" id='navBar-header' className='col-6 flex-end'>
       <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/"><i className="bi bi-house-door-fill"></i> Home</Nav.Link>
                <Nav.Link href="/services">Servicios</Nav.Link>
                <Nav.Link href="/about">Sobre mí</Nav.Link>
                <Nav.Link href="/contact">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
       </div>
      </Navbar>
        </Container>
    </header>
  )
}
