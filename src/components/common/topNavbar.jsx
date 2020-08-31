import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const TopNavBar = () => {
  return (
    <div style={{ borderBottomColor: "#0bd3d3" }}>
      <style type="text/css">
        {`
    .navbar-light {
      background-color: #ffffff;
    }
    `}
      </style>
      <Navbar variant="light" expand="lg">
        <Navbar.Brand href="/">Trevor Jarvis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavBar;
