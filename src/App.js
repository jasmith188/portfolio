import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Main from './components/Main/Main';
import Project from './components/Project/Project';
import data from './components/Data';
// import CardPage from './components/CardPage';
import ContactForm from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      {/* <NavBar name={data.name} contactEmail={data.contactEmail} /> */}
      <NavBar />
      <Main
        name={data.landingPageName}
       
        authorImage={data.landingPageImage}
      />
      <About
       paragraph={data.landingPagePara}
       paragraph2={data.landingPagePara2}/>
      {/* <CardPage /> */}
      <Project projects={data.projects} />
      <ContactForm />
    </div>
  );
}

export default App;
