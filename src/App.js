import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// import Resume from './components/Resume';
// import Footer from './components/Footer';
// import $ from 'jquery';

function App() {
  return (
    <div>
      <NavBar />
      <About />
      {/* <Resume /> */}
      <Portfolio />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default App;


