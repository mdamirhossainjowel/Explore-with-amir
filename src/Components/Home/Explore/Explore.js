import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import asia from "../../../Utilities/Images/asia.jpg";
import europ from "../../../Utilities/Images/europe.jpg";
import usa from "../../../Utilities/Images/america.jpg";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center">Places I Have Explored</h1>
      <Row className="justify-content-between g-5 mt-5 mb-5">
        <Col sm lg="3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={asia} />
            <Card.Body>
              <Card.Title>Asia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/asia">Explore Asia</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm lg="3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={europ} />
            <Card.Body>
              <Card.Title>Europe</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/europe">Explore Europe</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm lg="3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={usa} />
            <Card.Body>
              <Card.Title>United State of America</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/usa">Explore USA</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Explore;
