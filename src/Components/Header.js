import React from 'react';
import '../components/Header.css';
// import TypeWriter from "react-typewriter";

const Header = () => {
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>

      <ul id="nav" className="nav">
        <li>
          <a className="smoothscroll" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a
            className="smoothscroll"
            href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:74d2dc04-6db1-449c-b055-680709bf879c"
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
