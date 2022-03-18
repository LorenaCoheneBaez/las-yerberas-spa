import React from "react";
import { services_db } from "../data/services";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Services() {
  return (
    <div>
      <h2>Servicios</h2>
      <CardGroup>
        {services_db.map((element, i) => {
          return i < 3 ? <Card key={i}>
            <Card.Img
              variant="top"
              src={`../../assets/${element.img}`}
              alt={element.title}
            />
            <Card.Body>
              <Card.Title>{element.title}</Card.Title>
              <Card.Text>
                {element.description}
              </Card.Text>
            </Card.Body>
          </Card>
            :
            ''
        })}
      </CardGroup>

      <CardGroup>
        {services_db.map((element, i) => {
          return i >= 3 ? <Card key={i}>
            <Card.Img
              variant="top"
              src={`../../assets/${element.img}`}
              alt={element.title}
            />
            <Card.Body>
              <Card.Title>{element.title}</Card.Title>
              <Card.Text>
                {element.description}
              </Card.Text>
            </Card.Body>
          </Card>
            :
            ''
        })}
      </CardGroup>
    </div>
  );
}
