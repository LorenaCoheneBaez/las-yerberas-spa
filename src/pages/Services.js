import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Services() {
  return (
    <div>
      <h2>Servicios</h2>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="../../assets/masajeEspalda.jpg"
            alt="Tratamiento descontacturante"
          />
          <Card.Body>
            <Card.Title>Descontacturante</Card.Title>
            <Card.Text>
              Relaja la musculatura y disuelve las contracturas que se producen
              por el estrés, las malas posturas, la falta de descanso o una vida
              sedentaria.
            </Card.Text>
          </Card.Body>
        </Card>
      
        <Card>
          <Card.Img
            variant="top"
            src="../../assets/relajante.jpg"
            alt="Masajes relajantes"
          />
          <Card.Body>
            <Card.Title>Relajantes</Card.Title>
            <Card.Text>
              Alivia la tensión y consigue un estado mental de relajación. Se
              realiza en pies, piernas y espalda.
            </Card.Text>
          </Card.Body>
        </Card>
      
        <Card>
          <Card.Img
            variant="top"
            src="../../assets/pindas.jpg"
            alt="Masaje Ayurveda con pindas"
          />
          <Card.Body>
            <Card.Title>Ayurveda con pindas</Card.Title>
            <Card.Text>
              Es una antigua medicina hindú. Aporta hidratación, desintoxicación, relajación, y descongestión, por el uso de hierbas aromáticas y aceites esenciales calientes
            </Card.Text>
          </Card.Body>
        </Card>
      
      </CardGroup>
      
        <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="../../assets/ventosachina.jpg"
            alt="Tratamiento con ventosas chinas"
         
          />
          <Card.Body>
            <Card.Title>Ventosas chinas</Card.Title>
            <Card.Text>
              Elimina el dolor de espalda, causado por tensión o contracturas. Además es un excelente complemento en el tratamiento contra la celulitis.
            </Card.Text>
          </Card.Body>
        </Card>
      
        <Card>
          <Card.Img 
            variant="top"
            src="../../assets/maderoterapia.jpg"
            alt="Maderoterapia"
           
          />
          <Card.Body>
            <Card.Title>Maderoterapia</Card.Title>
            <Card.Text>
              Activa la circulación sanguínea y linfática. Reduce centímetros, elimina la celulitis, moldea el cuerpo, reafirma y tonifica la piel.
            </Card.Text>
          </Card.Body>
        </Card>
      
        <Card>
          <Card.Img
            variant="top"
            src="../../assets/fangoterapia.jpg"
            alt="Fangoterapia"
          />
          <Card.Body>
            <Card.Title>Fangoterapia</Card.Title>
            <Card.Text>
              Reduce el acné, las manchas y la oleosidad de la piel. Limpia, tonifica, hidrata y da luminosidad.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
