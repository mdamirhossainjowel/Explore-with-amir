import React, { useState } from "react";
import { Button, Container, Form, Toast } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdatePassword,
} from "react-firebase-hooks/auth";
import auth from "../../../_firebase.init";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [signInWithEmailAndPassword, error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, error1] = useSignInWithGoogle(auth);
  const [updatePassword] = useUpdatePassword(auth);
  // const handleNameBlur = (e) => {
  //   setName(e.target.value);
  // };
  const [massage, setMassage] = useState("");
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
  const resetPassword = () => {
    const result = updatePassword(email);
    setMassage(result);
  };

  return (
    <Container className="mt-5">
      {massage ? (
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Reset Password</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>{massage}</Toast.Body>
        </Toast>
      ) : (
        ""
      )}
      <Form onSubmit={handleSubmit} className="w-50 mx-auto ">
        <h1 className="text-center">Sign in</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {error || error1 ? (
          <p> Error:{error?.message || error1?.message}</p>
        ) : (
          ""
        )}

        <Button variant="none" onClick={resetPassword}>
          Forgot Password?
        </Button>
        <br />
        <Link to="/registration">new to EWA? Create Account</Link>
        <br />
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
