import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import asia from "../../../Utilities/Images/asia.jpg";
import europ from "../../../Utilities/Images/europe.jpg";
import usa from "../../../Utilities/Images/america.jpg";

const Clients = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center">
        Meet My <span className="text-danger">Clients</span>
      </h1>
      <Row className="d-flex justify-content-center g-5 mt-5 mb-5">
        <Col sm lg="4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={asia} />
            <Card.Body>
              <Card.Title>Asia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="info">Explore Asia</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm lg="4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={europ} />
            <Card.Body>
              <Card.Title>Europe</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Explore Europe</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm lg="4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={usa} />
            <Card.Body>
              <Card.Title>United State of America</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Explore USA</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm lg="4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={usa} />
            <Card.Body>
              <Card.Title>United State of America</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Explore USA</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm lg="4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={usa} />
            <Card.Body>
              <Card.Title>United State of America</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Explore USA</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Clients;
