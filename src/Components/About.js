import React from 'react';
import './About.css';
import profilePic from '../images/profile.jpeg';

function About() {
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <h1 id="title">
          Hello, I'm Jimmy Smith <br /> I Live in Charlotte, NC <br /> I'm a
          <span>Web Developer</span>
        </h1>
        <p>
          I greatly value self-development. I thrive in environments that push
          me to grow. I am a highly motivated and progress-focused Web Developer
          with 2+ years of experience. Working in the hectic restaurant business
          for the past 15 years has honed my skills in teamwork, time-management
          and dealing with ambiguity. These skills have allowed me to
          successfully transition my career from a chef to a Full Stack
          Developer.
        </p>
        <p>
          I have a deep understanding of Semantic HTML, CSS/SCSS, JavaScript,
          TypeScript, React.js, Node.js, jQuery, Git, REST API's, SQL and
          relational databases.
        </p>
        <a
          href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:74d2dc04-6db1-449c-b055-680709bf879c"
          rel="noreferrer"
          target="_blank"
        >
          <h1>
            <button>View Resume</button>
          </h1>
        </a>
        <di className="about-tech">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </di>
      </div>
      <div>
        <img src={profilePic} alt="profile-pic" />
      </div>
    </div>
  );
}

export default About;
