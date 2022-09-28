import React from 'react'
import styles from './Header.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* How to navigate without button */}
            <NavLink to="/login" activeStyle={{ fontWeight: 'bold' }} className="text-white hover:text-lime-800 mr-2 no-underline">Login</NavLink>
            <NavLink to="/logout" activeStyle={{ fontWeight: 'bold' }} className="text-white hover:text-lime-800 mr-2 no-underline">Logout</NavLink>
            <NavLink to="/register" activeStyle={{ fontWeight: 'bold' }} className="text-white hover:text-lime-800 no-underline">Resister</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
