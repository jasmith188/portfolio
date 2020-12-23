import React, { useRef, useEffect } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { TweenMax, Power3 } from 'gsap';
import { Link } from 'react-scroll';
import './Main.scss';

const Main = ({ name, paragraph, paragraph2, landingPageImage }) => {
  let animate = {
    title: useRef(null),
    description: useRef(null),
    portofolioLink: useRef(null),
    // portofolioImage1: useRef(null),
    // portofolioImage2: useRef(null),
  };

  useEffect(() => {
    TweenMax.to(animate.title, 1, {
      opacity: 1,
      delay: 0.5,
      ease: Power3.easeOut,
    });
    TweenMax.to(animate.description, 1, {
      opacity: 1,
      delay: 0.8,
      ease: Power3.easeOut,
    });
    TweenMax.to(animate.portofolioLink, 1, {
      opacity: 1,
      delay: 1.1,
      ease: Power3.easeOut,
    });
    // TweenMax.to(animate.portofolioImage1, 1, {
    //   opacity: 0.75,
    //   delay: 1.4,
    //   ease: Power3.easeOut,
    // });
    // TweenMax.to(animate.portofolioImage2, 1, {
    //   opacity: 0.75,
    //   delay: 1.7,
    //   ease: Power3.easeOut,
    // });
  });

  return (
    <div className="main">
      <div className="navbar">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="navbar__link"
        >
          About
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={window.innerWidth > 768 ? -140 : 0}
          duration={500}
          className="navbar__link"
        >
          Experience
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={window.innerWidth > 768 ? -100 : 0}
          duration={500}
          className="navbar__link"
        >
          Projects
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          className="navbar__link"
        >
          Skills
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="navbar__link"
        >
          Contact
        </Link>
      </div>
      <div className="sidebar">
        <a
          className="sidebar__link"
          href="https://github.com/AndreiManea"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          className="sidebar__link"
          href="https://www.instagram.com/andrei.codes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          className="sidebar__link"
          href="https://www.linkedin.com/in/andrei-manea-b422b8170/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div className="main__center">
        <div className="banner">
          <h1 className="banner__title" ref={(el) => (animate.title = el)}>
            {name}
          </h1>
          <h3
            className="banner__description"
            ref={(el) => (animate.description = el)}
          >
            FULL-STACK DEVELOPER
          </h3>
        </div>
        <div className="portofolio">
          <div
            className="portofolio__link-wrapper"
            ref={(el) => (animate.portofolioLink = el)}
          >
            <a
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="portofolio__link"
              href="https://docs.google.com/document/d/1d925nouzISSkhkrQ2MGmC7fi4cnUpGM1i0oyX7eAqmM/edit?usp=sharing"
            >
              <span>See My Resume</span>
              <ArrowForwardIcon />
            </a>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Main;
