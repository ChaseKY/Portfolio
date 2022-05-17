import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <>
      <footer className="footerContainer">
        <Navbar className="navbar" bg="dark" variant="dark">
          <Navbar.Brand className="contact">Contact</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/ChaseKY">Github</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/chase-young-a3a27722a/">LinkedIn</Nav.Link>
          </Nav>
        </Navbar>
      </footer>
    </>
  );
}

export default Footer;
