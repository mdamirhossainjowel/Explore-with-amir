import React from "react";
import { Container, Row } from "react-bootstrap";

// import client1 from "../../../Utilities/Images/aa.jpg";
// import client2 from "../../../Utilities/Images/II.png";
import Client from "./Client";

const Clients = () => {
  const tourists = [
    {
      id: 1,
      image: "https://i.ibb.co/HDrWZkL/aa.jpg",
      name: "John Doe",
      description:
        " He is amaging.He show us the everey corner off the city.you can trust him.",
    },
    {
      id: 2,
      image: "https://i.ibb.co/NTRPR3L/II.jpg",
      name: "Kajal Agarwal",
      description: " Good Service .We Enjoy A Lot.",
    },
    {
      id: 3,
      image: "https://i.ibb.co/HDrWZkL/aa.jpg",

      name: "Kevin Kly",
      description: "Not Much expensive. We Cover Every Thing on budget",
    },
    {
      id: 4,
      image: "https://i.ibb.co/NTRPR3L/II.jpg",
      name: "Ria Duch",
      description: " Thank You For your Co-oparation. You aRE TOO GOOD.",
    },
    {
      id: 5,
      image: "https://i.ibb.co/HDrWZkL/aa.jpg",
      name: "Deisel Joshi",
      description:
        " He is amaging.He show us the everey corner off the city.you can trust him.",
    },
  ];
  return (
    <Container className="mt-5">
      <h1 className="text-center">
        Meet My <span className="text-danger">Clients</span>
      </h1>
      <Row className="d-flex justify-content-center g-5 mt-5 mb-5">
        {tourists.map((tourist) => (
          <Client key={tourist.id} tourist={tourist}></Client>
        ))}
      </Row>
    </Container>
  );
};

export default Clients;
