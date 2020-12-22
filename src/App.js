import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Main from './components/Main';
import Project from './components/Project';
import data from './components/Data';
// import CardPage from './components/CardPage';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      {/* <NavBar name={data.name} contactEmail={data.contactEmail} /> */}
      <Navbar />
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
