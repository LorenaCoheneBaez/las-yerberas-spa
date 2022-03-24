import React from 'react'
import Container from 'react-bootstrap/Container'


export default function Error() {
  return (
    <div id='error'>
      <Container id='container-error'>
        <h2 className='title-error'>Lo siento...</h2>
        <h2 className='title-error'>Página no encontrada</h2>
        <a href="/" className='btn btn-light mt-3 fw-bold' id='btn-error'>Volver al Home</a>
    </Container>
      </div>
  )
}
