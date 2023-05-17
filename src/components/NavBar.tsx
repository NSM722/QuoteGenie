import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          QuoteGenie - Let's get some inspiration
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavBar