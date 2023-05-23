// **react
import React from 'react';

// **react-bootstrap
import Navbar from 'react-bootstrap/Navbar';

const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="fs-1 ms-4">
          QuoteGenie
        </Navbar.Brand>
    </Navbar>
  )
}

export default NavBar