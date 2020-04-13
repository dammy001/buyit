import React, { Component } from 'react'
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WOW from 'wowjs';
import './header.scss';

class Header extends Component {

  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return <Container fluid>
    <Navbar variant="dark" fixed="top" expand="lg" className="navbar">
        <Navbar.Brand href="/" className="wow bounceIn brand">BUYIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          
          </Nav>
          <Nav className="justify-content-right">
            <Nav.Link href="/"><FontAwesomeIcon icon="home" /> Home</Nav.Link>
            <Nav.Link href="#"><FontAwesomeIcon icon="shopping-cart" /> Shop</Nav.Link>
            <Nav.Link href="/login"><FontAwesomeIcon icon="user" /> Login</Nav.Link>
            <Nav.Link href="#"><Button className="button" variant="outline-danger">Get Started</Button></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
  </Container>
      
  }
}

export default Header