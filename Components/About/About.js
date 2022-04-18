import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import amir from "../../Utilities/Images/Md. Amir Hossain Jowel.jpg";

const About = () => {
  return (
    <Container>
      <Card className="mt-5 mx-auto text-center" style={{ width: "18rem" }}>
        <Card.Img className="w-50 m-auto mt-2" variant="top" src={amir} />
        <Card.Body>
          <Card.Title>Md. Amir Hossain Jowel</Card.Title>
          <Card.Text>
            My Goal is To be a Software Developer in next few Month. I am a
            dedicated person with a vision of improving myself. I am quick
            learner. I enjoy learning new things. The knowledge and perspective
            that my studies give me further strengthens my skills and
            presentation abilities. This flexibility helps me everywhere where
            there are many different personalities and learning styles.
          </Card.Text>
          <Button variant="info">Contact with me</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
