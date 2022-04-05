import React from "react";
import { services_db } from "../data/services";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Services() {
  return (
    <div id="services">
      <h2>Servicios</h2>
      <CardGroup>
        {services_db.map((element, i) => {
          return i < 3 ? <Card key={i} className="zoom">
            <Card.Img loading='eager'
              variant="top"
              src={`../../assets/${element.img}`}
              alt={element.title}
            />
            <Card.Body>
              <Card.Title><i className="bi bi-flower1 "></i> {element.title}</Card.Title>
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
          return i >= 3 ? <Card key={i} className="zoom">
            <Card.Img loading='lazy'
              variant="top"
              src={`../../assets/${element.img}`}
              alt={element.title}
            />
            <Card.Body>
              <Card.Title> <i className="bi bi-flower1 "></i> {element.title}</Card.Title>
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
