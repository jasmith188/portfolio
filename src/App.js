import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
// import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Navbar /> */}
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
