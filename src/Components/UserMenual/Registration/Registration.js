import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../_firebase.init";
const Registration = () => {
  // const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [createUserWithEmailAndPassword, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  let navigate = useNavigate();

  let location = useLocation();
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  let from = location.state?.from?.pathname || "/";
  // const handleNameBlur = (e) => {
  //   setName(e.target.value);
  // };
  if (user) {
    navigate(from, { replace: true });
  }
  const handleEmailBlur = (e) => {
    setemail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setpassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit} className="w-50 mx-auto ">
        <h1 className="text-center">Sign Up</h1>
        <Form.Group className="mb-3">
          <Form.Label>Your Full Name</Form.Label>
          <Form.Control
            // onBlur={handleNameBlur}
            type="text"
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <Link to="/login">Already Have an Account?</Link>
        <br />
        <p>{error?.message}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-center">-----------------or--------------------</p>

      <Button
        onClick={() => signInWithGoogle()}
        className="w-50 d-block m-auto"
        variant="primary"
      >
        Signin With Google
      </Button>
    </Container>
  );
};

export default Registration;
