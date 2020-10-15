import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
// import Image from '../images/initials.png';
import '../App.css';

const NavBar = () => {
  return (
    <div className="top-navbar">
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand to="home" href="#home">
          JS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="navbar-collapse" id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              className="ml-auto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="about"
              href="#about"
            >
              About
            </Link>
            <Link
              className="ml-auto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="project"
              href="#project"
            >
              Projects
            </Link>
            
            <Link
              className="ml-auto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="contact"
              href="#contact"
            >
              Contact
            </Link>
            {/* <Link
              className="ml-auto"
              // spy={true}
              // smooth={true}
              // offset={-70}
              // duration={1000}
              // to="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:d587a8fe-9f08-489c-be03-fcaf8579377d"
              href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:d587a8fe-9f08-489c-be03-fcaf8579377d"
            >
              Resume
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
