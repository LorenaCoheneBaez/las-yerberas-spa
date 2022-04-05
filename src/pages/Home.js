import React from 'react';
import { benefits } from '../data/benefits';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const subtitulo = ["BIENESTAR", "RELAJACIÓN", "SALUD"]

export default function Home() {
  return (
    <div id='home'>
      <h1>Bienvenid@s a Masoterapia Las Yerberas</h1>
      <section>
        <div id='banner'>
          <div className='titulo-banner'>
            {subtitulo.map((element, i) => {
              return <h2 key={i + 1} className='focus-in-expand'>{element}</h2>
            }
            )}
          </div>
        </div>
      </section>
      <section className='seccion-beneficios'>
        <div>
          <h3>Beneficios de la masoterapia:</h3>
          <ul className="list-group">
            {benefits.map((element, i) => {
              return <li key={i} id='list-group-item' className="list-group-item"><i id='flower' className="bi bi-flower1 "></i> {element}</li>
            }
            )}
          </ul>
        </div>
        <div className='columna-gif'>
          <Nav.Link as={Link} to="/contact">
            <img loading='lazy' className='gif' src="../../assets/giftcard.gif" alt="promo gift card" />
          </Nav.Link>
        </div>
      </section>
    </div>
  )
}
