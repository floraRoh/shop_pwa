import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "styles/NavBar.scss";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/shop_pwa">
          <img src={`${process.env.PUBLIC_URL}/images/logo2.png`}alt="IDF Mall Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/shesmiss">
              SHESMISS
            </Nav.Link>
            <Nav.Link as={Link} to="/sistina">
              SISTINA
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About IDF
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
