import React from 'react';
import Navbar from '../Navbar';

function Header(props) {
  console.log(props);
  return (
    <div>
      <Navbar setCurrent={props.setCurrent}></Navbar>
    </div>
  );
}

export default Header;
