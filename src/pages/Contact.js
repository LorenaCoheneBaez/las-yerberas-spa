import React from 'react'
import Form from 'react-bootstrap/Form'
// import CardGroup from 'react-bootstrap/CardGroup'
// import Card from 'react-bootstrap/Card'

export default function Contact() {
  return (
    <div>
      <h2>Contacto:</h2>
      <Form size="sm">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre y apellido:</Form.Label>
          <Form.Control type="text" placeholder="Nombre Apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="nombre@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Consulta:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      
     
        <h2 id='mapa'>¿Dónde estoy?</h2>
        <iframe src="https://www.google.com/maps/d/embed?mid=1NvM-ctXlTN7B22ClQYFipM7fMexNlyHT&ehbc=2E312F" width="640" height="480"></iframe>
      
    </div>
  )
}
