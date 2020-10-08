import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Project from './components/Project';
// import Contact from './components/Contact';
// import Skills from './components/Skills';
import data from './components/Data';
// import Resume from './components/Resume';
import Contact from './components/ContactPage'

function App() {
  return (
    <div className="App">
      <NavBar name={data.name} contactEmail={data.contactEmail} />
      <About
        name={data.landingPageName}
        paragraph={data.landingPagePara}
        paragraph2={data.landingPagePara2}
        authorImage={data.landingPageImage}
      />
      {/* <Skills /> */}
      {/* <Resume /> */}
      <Project projects={data.projects} />
      {/* <Contact /> */}
    <Contact />
    
    </div>
  );
}

export default App;
