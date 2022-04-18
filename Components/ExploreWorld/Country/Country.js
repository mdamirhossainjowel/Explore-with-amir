import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Country = (props) => {
  const { name, image, days, Price } = props.country;

  return (
    <Col className="text-center" sm lg="4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Days:{days} <br /> Price: {Price}
          </Card.Text>
          <Link to="/booking">Booking</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Country;
