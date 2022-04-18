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
                Asia is Earth's largest and most populous continent, located
                primarily in the Eastern and Northern Hemispheres. It shares the
                continental landmass of Eurasia with the continent of Europe,
                and the continental landmass of Afro-Eurasia with Africa and
                Europe. Asia covers an area of 44,579,000 square kilometres
                (17,212,000 sq mi), about 30% of Earth's total land area and
                8.7% of the Earth's total surface area.
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
                Europe is a continent, also recognised as part of Eurasia,
                located entirely in the Northern Hemisphere and mostly in the
                Eastern Hemisphere. Comprising the westernmost peninsulas of the
                continental landmass of Eurasia,[10] it shares the continental
                landmass of Afro-Eurasia with both Asia and Africa.
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
                The United States of America (U.S.A. or USA), commonly known as
                the United States (U.S. or US) or simply America, is a country
                primarily located in North America. It consists of 50 states, a
                federal district, five major unincorporated territories, 326
                Indian reservations, and nine minor outlying islands.
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
