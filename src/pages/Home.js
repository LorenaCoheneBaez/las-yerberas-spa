import React from 'react';
import {benefits} from '../data/benefits'

const subtitulo = ["BIENESTAR", "SALUD", "RELAJACIÓN"]

export default function Home() {
  return (
    <div className='home'>
      <h1>Bienvenid@s a Masoterapia Las Yerberas</h1>
      <section>
        <div id='banner'>
          {subtitulo.map((element, i) =>{
            return <h2 key={i+1} className='focus-in-expand'>{element}</h2>
          }
          )}
        </div>
      </section>
      <section>
        <h3>Beneficios de la masoterapia:</h3>
        <ul class="list-group">
          {benefits.map((element, i)=>{
            return <li key={i} id='list-group-item' className="list-group-item">{element}</li>
          }
          )}
        </ul>
      </section>
    </div>
  )
}
