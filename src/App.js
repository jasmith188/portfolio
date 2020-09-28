import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Skills from './components/Skills';
import data from './components/Data';
// import Resume from './components/Resume';
// import Footer from './components/Footer';
// import $ from 'jquery';

function App() {
  return (
    <div>
      <NavBar name={data.name} contactEmail={data.contactEmail} />
      <About
        name={data.landingPageName}
        paragraph={data.landingPagePara}
        paragraph2={data.landingPagePara2}
        authorImage={data.landingPageImage}
      />
      {/* <Skills /> */}
      {/* <Resume /> */}
      <Portfolio projects={data.projects}/>
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
