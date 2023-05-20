import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="fs-2 m-2">
          QuoteGenie
        </Navbar.Brand>
    </Navbar>
  )
}

export default NavBar