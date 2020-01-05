import React from "react";

import { CardColumns, Card } from "react-bootstrap";
import { Styles } from "./card-list.styles";

import { doctors } from "../../doctors_sample_json";

const CardList = () => (
  <Styles>
    <CardColumns>
      {doctors.map(({ id, name, image, email }) => (
        <Card key={id}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Some example text to describe this doc.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Contact: {email}</small>
          </Card.Footer>
        </Card>
      ))}
    </CardColumns>
  </Styles>
);

export default CardList;
