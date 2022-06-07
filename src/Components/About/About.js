import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import amir from "../../Utilities/Images/Md. Amir Hossain Jowel.jpg";

const About = () => {
  return (
    <Container>
      <Card className="mt-5 mx-auto text-center mb-5" style={{ width: "18rem" }}>
        <Card.Img className="w-50 m-auto mt-2" variant="top" src={amir} />
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
