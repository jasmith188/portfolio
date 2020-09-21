import React from 'react';
import { Jumbotron, Container, Button, Accordion, Card } from 'react-bootstrap';
import Typical from 'react-typical';

import Image from '../images/mountain.jpg';

const About = () => {
  return (
    <div className="about" src={Image}>
      

      <div className="jumbotron text-center hoverable p-4">
        <div className="row">
          <div className="col-md-4 offset-md-1 mx-3 my-3">
            <div className="view overlay">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg"
                class="img-fluid"
                alt="Sample image for first version of blog listing"
              />
              <a>
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>
          </div>

          <div className="col-md-7 text-md-left ml-3 mt-3">
            <h1>Hi, I'm James Smith</h1>
            <p>
              I'm a
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  ' developer 💻',
                  1000,
                  ' gadget nerd 🤓',
                  1000,
                  ' former chef 👨‍🍳',
                  1000,
                  ' lover of all sports 🦮 🐈',
                  1000,
                ]}
              />
            </p>

            <p>
            Hello, my name is James Smith and I have recently recieved a
            Certificate in Full Stack Coding at the University of Central
            Florida. I have learned the fundamentals of different Languages and
            Applications used in front and back end development. I'm looking
            forward to contributing to my team's success by collaboratively
            creating different projects and applications.
          </p>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Click to find out more!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Working in the hectic restaurant business for the past 16
                  years has honed my skills in teamwork, time-management and
                  dealing with ambiguity. These skills have allowed me to
                  successfully transition my career from a chef to a Full Stack
                  Developer.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
