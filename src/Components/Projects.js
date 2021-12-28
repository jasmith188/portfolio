import React from 'react';
import './Projects.css';
import weddingKnot from '../images/wedding-wire.jpg';
import githubBlueLogo from '../images/github-blue.png';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div>
        <div className="projects-examples">
          <img src={weddingKnot} alt="wedding-knot" />
          <div className="projects-content">
            <h1>Wedding Knot</h1>
            <ol>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Corrupti quo aperiam pariatur voluptas velit numquam quae harum,
                molestiae
              </li>
              <li>
                porro error vero possimus sint tenetur iure cum eaque enim
                dolor. Debitis?
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ol>
            <button>View</button>
            <p>
              <img src={githubBlueLogo} alt="github-logo" /> - Source Code
            </p>
          </div>
        </div>
        <div className="projects-examples" id="projects-2">
          <img src={weddingKnot} alt="wedding-knot" />
          <div className="projects-content">
            <h1>Wedding Knot</h1>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Corrupti quo aperiam pariatur voluptas velit numquam quae harum,
                molestiae
              </li>
              <li>
                porro error vero possimus sint tenetur iure cum eaque enim
                dolor. Debitis?
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <button>View</button>
            <p>
              <img src={githubBlueLogo} alt="github-logo" /> - Source Code
            </p>
          </div>
        </div>
        <div className="projects-examples">
          <img src={weddingKnot} alt="wedding-knot" />
          <div className="projects-content">
            <h1>Wedding Knot</h1>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Corrupti quo aperiam pariatur voluptas velit numquam quae harum,
                molestiae
              </li>
              <li>
                porro error vero possimus sint tenetur iure cum eaque enim
                dolor. Debitis?
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <button>View</button>
            <p>
              <img src={githubBlueLogo} alt="github-logo" /> - Source Code
            </p>
          </div>
        </div>
        <div className="projects-examples" id="projects-4">
          <img src={weddingKnot} alt="wedding-knot" />
          <div className="projects-content">
            <h1>Wedding Knot</h1>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Corrupti quo aperiam pariatur voluptas velit numquam quae harum,
                molestiae
              </li>
              <li>
                porro error vero possimus sint tenetur iure cum eaque enim
                dolor. Debitis?
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <button>View</button>
            <p>
              <img src={githubBlueLogo} alt="github-logo" /> - Source Code
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
