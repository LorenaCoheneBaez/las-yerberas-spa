import React from 'react'
import Nav from 'react-bootstrap/Nav'
export default function Footer() {
  return (
    <footer>
      <Nav className="flex-column">
        <Nav.Link href="#header" className='btn-arriba'><i className="bi bi-arrow-up-circle-fill"></i> Volver arriba</Nav.Link>
        <Nav.Link className='btn-arriba' href="https://github.com/LorenaCoheneBaez" target="_blank" rel="noreferrer">Desarrolado por:
        Lorena Cohene Báez</Nav.Link>
      </Nav>
    </footer>
  )
}
