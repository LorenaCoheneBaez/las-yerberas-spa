import React from 'react'

export default function About() {
  return (
    <div>
      <h2>Acerca de mí</h2>
      <div className="card mb-3" >
        <div className="row g-0">
            <div className="col-md-4">
              <img src="../../assets/about-img.png" className="img-fluid rounded-start" alt="Imagen acerca de mí"/>
            </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">¡Hola, soy Magalía!</h3>
              <p className="card-text">Estudié masoterapia en la escuela de Alta Formación Profesional (ACP), me dedico a ayudarte a encontrar salud, bienestar y calidad de vida.</p>
              <p className="card-text">Porque considero que todos necesitamos sentirnos mejor, y darnos un momento para nosotros mismos.</p>
              <p className="card-text">Te invito a que me escribas y te regales ese instante de paz que mereces.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
