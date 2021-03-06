import React from "react";
import { Container, Row } from "react-bootstrap";

import Country from "../Country/Country";

const Asia = () => {
  const countries = [
    {
      id: 1,
      image: "https://i.ibb.co/2kJwqsS/bangladesh-flag-ruffled-beautifully-waving-macro-close-up-shot.jpg",
      name: "Bangladesh",
      days: " 2 Days",
      Price: "25000USD per Person",
    },
    {
      id: 2,
      image: "https://i.ibb.co/khw2vd7/Khao-Tapu-Ao-Phang-na-Thailand-National-Park.jpg",
      name: "Thailand",
      days: " 2 Days",
      Price: "35000USD per Person",
    },
    {
      id: 3,
      image: "https://i.ibb.co/Ykk4M7T/images-24.jpg",
      name: "China",
      days: " 2 Days",
      Price: "25000USD per Person",
    },
    {
      id: 4,
      image: "https://i.ibb.co/dPRb0xs/images-16.jpg",
      name: "Nepal",
      days: " 2 Days",
      Price: "25000USD per Person",
    },
    {
      id: 5,
      image: "https://i.ibb.co/k2Lq0j2/images-22.jpg",
      name: "Night City",
      days: " 2 Days",
      Price: "25000USD per Person",
    },
  ];
  return (
    <Container className="mt-5">
      <h1 className="text-center">
        <span className="text-danger">ASIA</span>
      </h1>
      <Row className="d-flex justify-content-center g-5 mt-5 mb-5">
        {countries.map((country) => (
          <Country key={country.id} country={country}></Country>
        ))}
      </Row>
    </Container>
  );
};

export default Asia;
