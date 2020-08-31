import React from "react";
import { Navbar, Container } from "react-bootstrap";

const BottomNavBar = () => {
  return (
    // <Navbar fixed="bottom">
    //   <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    //   <Navbar.Toggle />
    //   <Navbar.Collapse className="justify-content-end">
    //     <Navbar.Text>
    //       Signed in as: <a href="#login">Mark Otto</a>
    //     </Navbar.Text>
    //   </Navbar.Collapse>
    // </Navbar>
    <Navbar
      sticky="bottom"
      expand="lg"
      variant="light"
      style={{ paddingTop: 50 }}
    >
      <Navbar.Brand href="#"></Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>© Trevor Jarvis, 2020</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BottomNavBar;
