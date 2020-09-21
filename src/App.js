import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills'
// import Resume from './components/Resume';
// import Footer from './components/Footer';
// import $ from 'jquery';

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Skills />
      {/* <Resume /> */}
      <Portfolio />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default App;


