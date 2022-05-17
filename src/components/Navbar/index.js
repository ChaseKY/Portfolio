import React from 'react';
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import { Navbar as NavB } from 'react-bootstrap';

function Navbar(props) {
  return (
    <div>
      <NavB className="navbar" bg="dark" variant="dark">
        <NavB.Brand className="btn">Chase Young</NavB.Brand>
        <Nav className="me-auto">
          <Button className="btn" variant="info" onClick={() => props.setCurrent(0)}>
            About
          </Button>
          <Button className="btn" variant="info" onClick={() => props.setCurrent(1)}>
            Projects
          </Button>
          <Button className="btn" variant="info" onClick={() => props.setCurrent(2)}>
            Resume
          </Button>
        </Nav>
      </NavB>
    </div>
  );
}

export default Navbar;
