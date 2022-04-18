import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import asia from "../../Utilities/Images/asia.jpg";

const About = () => {
  return (
    <Container>
      <Card className="mt-5 mx-auto text-center" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={asia} />
        <Card.Body>
          <Card.Title>Md. Amir Hossain Jowel</Card.Title>
          <Card.Text>
            Founder and C.E.O. of Explore With Amir. Here You can book me for
            your vacation tour or world Tour.
          </Card.Text>
          <Button variant="info">Contact with me</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
