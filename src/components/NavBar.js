// import React from 'react';
// import { Link } from 'react-scroll';
// import { Navbar, Nav } from 'react-bootstrap';
// // import Image from '../images/initials.png';
// import '../App.css';

// const NavBar = () => {
//   return (
//     <div className="top-navbar">
//       <Navbar
//         sticky="top"
//         collapseOnSelect
//         expand="sm"
//         variant="dark"
//         color="white"
//       >
//         <Navbar.Brand to="home" href="#home"></Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse className="navbar-collapse" id="responsive-navbar-nav">
//           <Nav className="ml-auto">
//             <Link
//               className="ml-auto"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={1000}
//               to="about"
//               href="#about"
//             >
//               About
//             </Link>
//             <Link
//               className="ml-auto"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={1000}
//               to="project"
//               href="#project"
//             >
//               Projects
//             </Link>

//             <Link
//               className="ml-auto"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={1000}
//               to="contact"
//               href="#contact"
//             >
//               Contact
//             </Link>
//             <a
//               className="ml-auto"
//               // spy={true}
//               // smooth={true}
//               // offset={-70}
//               // duration={1000}
//               // to="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:d587a8fe-9f08-489c-be03-fcaf8579377d"
//               href="https://docs.google.com/document/d/1d925nouzISSkhkrQ2MGmC7fi4cnUpGM1i0oyX7eAqmM/edit?usp=sharing"
//             >
//               Resume
//             </a>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default NavBar;

import React, { useEffect, useRef, useState } from 'react';
import './Navbar.scss';
import { Squash as Hamburger } from 'hamburger-react';
import { Link } from 'react-scroll';
import { TweenMax, Power3 } from 'gsap';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Navbar() {
  const [active, setActive] = useState(false);
  let navbar = useRef(null);
  useEffect(() => {
    TweenMax.to(navbar, 1, {
      opacity: 1,
      delay: 2,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className="navbar-mobile" ref={(el) => (navbar = el)}>
      <div className="navbar-mobile__button">
        <Hamburger size={40} toggled={active} toggle={setActive} />
      </div>

      <div
        className={active ? 'navbar-mobile__menu' : 'navbar-mobile__menu--hide'}
      >
        <Link
          to="about"
          href="#about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => setActive(false)}
          className="navbar-mobile__link"
        >
          About
        </Link>
        {/* <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          onClick={() => setActive(false)}
          duration={800}
          className="navbar-mobile__link"
        >
          Skills
        </Link> */}
        <Link
          to="project"
          href="#project"
          spy={true}
          smooth={true}
          offset={window.innerWidth > 768 ? -100 : 0}
          duration={500}
          onClick={() => setActive(false)}
          className="navbar-mobile__link"
        >
          Projects
        </Link>
        <Link
          to="contact"
          href="#contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          onClick={() => setActive(false)}
          className="navbar-mobile__link"
        >
          Contact
        </Link>
        <div className="navbar-mobile__social-media">
          <a
            className="navbar-mobile__icon-link"
            href="https://github.com/jasmith188"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="navbar-mobile__icon" />
          </a>
          <a
            className="navbar-mobile__icon-link"
            href="https://www.instagram.com/jimmysmith812/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="navbar-mobile__icon" />
          </a>
          <a
            className="navbar-mobile__icon-link"
            href="https://www.linkedin.com/in/jamessmith812/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="navbar-mobile__icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
