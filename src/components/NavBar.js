import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../index.css'

const NavBar = () => {
  return (
    <div >
      <Navbar sticky="top" expand="sm">
        <Navbar.Brand to="home" href="#home">James Smith</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
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
            <NavDropdown className="ml-auto" title="Projects">
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="project 1"
                href="#project 1"
              >
                Project 1
              </Link>
              <li />
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="project 2"
                href="#project 2"
              >
                Project 2
              </Link>
              <li />
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="project 3"
                href="#project 3"
              >
                Project 3
              </Link>
            </NavDropdown>
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
