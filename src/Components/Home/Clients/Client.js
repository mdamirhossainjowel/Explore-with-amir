import React from "react";
import { Card, Col } from "react-bootstrap";

const Client = (props) => {
  const { name, image, description } = props.tourist;
  return (
    <Col sm lg="4">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="w-50 m-auto rounded-pill mt-4"
          variant="top"
          src={image}
        />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Client;
