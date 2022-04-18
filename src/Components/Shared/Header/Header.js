import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../_firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="/home">EWA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto ">
            <NavLink
              className="text-decoration-none me-3 text-white"
              to="/asia"
            >
              Asia
            </NavLink>
            <NavLink
              className="text-decoration-none me-3 text-white"
              to="/europe"
            >
              Europe
            </NavLink>
            <NavLink className="text-decoration-none me-3 text-white" to="/usa">
              USA
            </NavLink>
          </Nav>
          <Nav>
            {user ? (
              <NavLink
                className="text-decoration-none text-white"
                eventKey={2}
                to=""
                onClick={() => signOut(auth)}
              >
                Signout
              </NavLink>
            ) : (
              <NavLink
                className="text-decoration-none text-white"
                eventKey={2}
                to="/login"
              >
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
