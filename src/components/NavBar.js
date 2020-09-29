import React from 'react';
// import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
import Image from '../images/initials.png';
import '../App.css';

const NavBar = () => {
  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
        float-xs-right
      >
        <Navbar.Brand src={Image}to="home" href="#home">
          JS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="ml-auto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="about"
              href="#about"
            >
              About
            </Nav.Link>
            <Nav.Link
              className="ml-auto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="project"
              href="#project"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className="ml-auto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="contact"
              href="#contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
