import React from 'react';
import {Navbar} from 'react-bootstrap';


const NavbarTop = ({uid}) => {
  return(
    <Navbar fixed="top" variant="light" bg="light">
      <Navbar.Brand href="#home">Tasks</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            logado como: <a href="#login">{uid}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarTop;