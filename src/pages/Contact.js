import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Mapa from '../components/Mapa';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ipq3g2d', 'template_v1xc7be', form.current, 'ZfQARuk7KQflekKwa')
      .then((result) => {
        alert('Mensaje enviado')
        form.current.reset()
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={8}>
          <section className='my-3'>
              <h2>Contacto:</h2>
            <Form size="sm" ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" >
                <Form.Label><h5>Nombre y apellido:</h5></Form.Label>
                <Form.Control type="text" placeholder="Nombre y Apellido" name='name' required className='form-input' />
              </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label><h5>E-mail:</h5></Form.Label>
                  <Form.Control type="email" placeholder="nombre@email.com" name='email' required className='form-input'  />
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label><h5>Consulta:</h5></Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Escriba aquí su mensaje." name='message' required className='form-input textarea'/>
                </Form.Group>
              <button type="submit" id="button" className="d-grid gap-2 col-6 mx-auto btn-submit" value="Send">ENVIAR</button>
            </Form>
</section>
          <Mapa/>
        </Col>
      </Row>
    </Container>
  );
};