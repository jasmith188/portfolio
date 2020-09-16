import React from 'react';

import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default () => {
  return (
    <div>
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
