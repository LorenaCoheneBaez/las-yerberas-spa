import React from 'react'

export default function Mapa() {
  return (
      <section className='mt-4' id='mapa'>
          <h2>¿Dónde estoy?</h2>
          <p><i className="bi bi-geo-alt-fill"></i> José C. Paz</p>
          <p><i className="bi bi-geo-alt-fill"></i> Garín</p>
          <iframe title='map' id='map' src="https://www.google.com/maps/d/embed?mid=1NvM-ctXlTN7B22ClQYFipM7fMexNlyHT&ehbc=2E312F"></iframe>
      </section>
  )
}
