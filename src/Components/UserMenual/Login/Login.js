import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../_firebase.init";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, error1] = useSignInWithGoogle(auth);

  // const handleNameBlur = (e) => {
  //   setName(e.target.value);
  // };

  const handleEmailBlur = (e) => {
    setemail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setpassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    console.log(loading);
  }
  if (error) {
    console.log(error.message);
  }
  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit} className="w-50 mx-auto ">
        <h1 className="text-center">Sign in</h1>
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
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p>{error?.message || error1?.message}</p>
        <Link to="/registration">new to EWA? Create Account</Link>
        <br />
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

export default Login;
