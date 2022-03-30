import React from 'react';

function Navbar(props) {
  return (
    <div>
      <button onClick={() => props.setCurrent(0)}>About</button>
      <button onClick={() => props.setCurrent(1)}>Projects</button>
      <button onClick={() => props.setCurrent(2)}>Resume</button>
    </div>
  );
}

export default Navbar;
