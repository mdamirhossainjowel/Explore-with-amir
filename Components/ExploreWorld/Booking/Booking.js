import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const Booking = () => {
  return (
    <Container className="mt-5">
      <Form className="w-50 mx-auto ">
        <h1 className="text-center">Booking</h1>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Address</Form.Label>
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Total Person</Form.Label>
          <Form.Control type="text" placeholder="Person" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Cell No</Form.Label>
          <Form.Control type="text" placeholder="Cell No" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Book
        </Button>
      </Form>
    </Container>
  );
};

export default Booking;
