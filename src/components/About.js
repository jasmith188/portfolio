import React from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';
import Typical from 'react-typical';
import Image1 from '../images/profile.jpeg';

// import Image from '../images/mountain.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="jumbotron text-center hoverable p-4">
        <div className="row">
          <div className="col-md-4 offset-md-1 mx-3 my-3">
            <div className="view overlay">
              <img src={Image1} height="350px" width="290px" alt={'error'} />
              <div className="mask rgba-white-slight"></div>
            </div>
          </div>

          <div className="col-md-7 text-md-left ml-3 mt-3">
            <h1>Hi, I'm James Smith.</h1>
            <p>
              I'm a
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  ' developer 💻.',
                  900,
                  ' gadget nerd 🤓.',
                  900,
                  ' former chef 👨‍🍳.',
                  900,
                  // ' fan of 🏀 and 🏈 I have 2 🐈 🐈',
                  // 900,
                ]}
              />
            </p>

            <p>
              Hello, my name is James Smith and I have recently recieved a
              Certificate in Full Stack Coding at the University of Central
              Florida. I have learned the fundamentals of different Languages
              and Applications used in front and back end development. I'm
              looking forward to contributing to my team's success by
              collaboratively creating different projects and applications.
            </p>
            <p>
              Working in the hectic restaurant business for the past 16 years
              has honed my skills in teamwork, time-management and dealing with
              ambiguity. These skills have allowed me to successfully transition
              my career from a chef to a Full Stack Developer.
            </p>
            <Button variant="outline-success">Click To View My Resume</Button>
            {''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
