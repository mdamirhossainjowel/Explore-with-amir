import React from "react";
import { Container, Row } from "react-bootstrap";

import Country from "../Country/Country";

const USA = () => {
  const countries = [
    {
      id: 1,
      image: "https://i.ibb.co/kKbMjmZ/images-21.jpg",
      name: "Statue Liverty",
      days: " 2 Days",
      Price: "25000USD per Person",
    },
    {
      id: 2,
      image: "https://i.ibb.co/k2Lq0j2/images-22.jpg",
      name: "New York",
      days: " 2 Days",
      Price: "35000USD per Person",
    },
    {
      id: 3,
      image: "https://i.ibb.co/sKvK6xC/istockphoto-1145895508-2048x2048.jpg",
      name: "Hollywood",
      days: " 2 Days",
      Price: "25000USD per Person",
    },
    {
      id: 4,
      image: "https://i.ibb.co/qMBJKKM/usa-best-places-san-francisco.jpg",
      name: "Bridg",
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
        <span className="text-danger">USA</span>
      </h1>
      <Row className="d-flex justify-content-center g-5 mt-5 mb-5">
        {countries.map((country) => (
          <Country key={country.id} country={country}></Country>
        ))}
      </Row>
    </Container>
  );
};

export default USA;
