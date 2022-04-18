import React from "react";
import { Container, Row } from "react-bootstrap";

import Country from "../Country/Country";

const Europe = () => {
  const countries = [
    {
      id: 1,
      image: "https://i.ibb.co/KXF3gJg/images-17.jpg",
      name: "Germany",
      days: " 2 Days",
      Price: "25000USD per Person",
    },
    {
      id: 2,
      image: "https://i.ibb.co/PGrSCY8/images-18.jpg",
      name: "France",
      days: " 2 Days",
      Price: "35000USD per Person",
    },
    {
      id: 3,
      image: "https://i.ibb.co/k2Lq0j2/images-22.jpg",
      name: "Italy",
      days: " 2 Days",
      Price: "25000USD per Person",
    },
    {
      id: 4,
      image: "https://i.ibb.co/C85y67g/images-19.jpg",
      name: "Ireland",
      days: " 2 Days",
      Price: "25000USD per Person",
    },
    {
      id: 5,
      image: "https://i.ibb.co/mGx7c3d/images-20.jpg",
      name: "Romania",
      days: " 2 Days",
      Price: "25000USD per Person",
    },
  ];
  return (
    <Container className="mt-5">
      <h1 className="text-center">
        <span className="text-danger">EUROPE</span>
      </h1>
      <Row className="d-flex justify-content-center g-5 mt-5 mb-5">
        {countries.map((country) => (
          <Country key={country.id} country={country}></Country>
        ))}
      </Row>
    </Container>
  );
};

export default Europe;
