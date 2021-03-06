import React from 'react'
import Nav from 'react-bootstrap/Nav'
export default function Footer() {
  return (
    <footer id='footer'>
      <section>
        <Nav className="nav flex-column">
          <ul class="list-group">
            <div className='redes-footer'>
              <p className='mercado-pago'>¡Seguime en mis redes!</p>
              <div className='d-flex'>
                <Nav.Link className='link-redes' href="https://www.instagram.com/masoterapia.lasyerberas/?hl=es-la" target="_blank" rel="noreferrer nofollow noopener">
                  <i className="bi bi-instagram  redes"></i></Nav.Link>
                <Nav.Link className='link-redes' href="https://api.whatsapp.com/send?phone=+5491134496118" target="_blank" rel="noreferrer nofollow noopener">
                  <i className="bi bi-whatsapp  redes"></i></Nav.Link>
              </div>
            </div>
            <Nav.Link href="#header" className='btn-arriba fw-bold arriba'><i className="bi bi-arrow-up-circle-fill fw-bold fs-5 me-1"></i>Volver arriba</Nav.Link>
            <section>
              <p className="mercado-pago terminos">Masoterapia Las Yerberas | Todos los derechos reservados &copy; 2022</p>
              <article>
                <Nav.Link className='btn-arriba dev' href="https://github.com/LorenaCoheneBaez" target="_blank" rel="noreferrer nofollow noopener">Desarrolado por:
                  Lorena Cohene Báez</Nav.Link>
              </article>
            </section>
          </ul>
        </Nav>
      </section>
    </footer>
  )
}
