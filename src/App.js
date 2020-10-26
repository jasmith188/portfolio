import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import data from './components/Data';
import CardPage from './components/CardPage'

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
      <CardPage />
      <Project projects={data.projects} />
      <Contact />
    </div>
  );
}

export default App;
