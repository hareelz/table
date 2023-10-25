import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Makers</Navbar.Brand>
      <Nav className="me-auto">
        <Link to='/'>
        <Navbar.Brand>Table</Navbar.Brand>
        </Link>
        <Link to='/add'>
        <Navbar.Brand>Add</Navbar.Brand>
        </Link>
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default Header