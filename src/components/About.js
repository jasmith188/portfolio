import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Typical from 'react-typical';
import Image1 from '../images/profile.jpeg';
import Image2 from '../images/cooking.jpeg';

import '../App.css';

const About = ({ name, paragraph, paragraph2, landingPageImage }) => {
  return (
    <div id="about" className="about">
      <div className="jumbotron text-center hoverable p-4">
        <div className="row">
          <div className="col-md-7 text-md-left ml-3 mt-3">
            <h1 className="about-intro">Hi, I'm {name}.</h1>
            <p>
              I
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  ' am a developer 💻',
                  900,
                  "'m a former chef  👨‍🍳",
                  900,
                  ' live in Florida 🍊 😎 🌴',
                  900,
                  "'m a problem solver 🤓",
                  900,
                  ' love the outdoors 🤿  🚴🏻‍♂️  🎣  🏊‍♂️  🏀  🏈',
                  900,
                ]}
              />
            </p>
            {/* <Button href='https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:d587a8fe-9f08-489c-be03-fcaf8579377d'>Resume</Button> */}

            <hr />
            <p>{paragraph}</p>

            {''}
          </div>

          <div className="col-md-4 offset-md-1 mx-3 my-3">
            <div className="view overlay">
              <img
                className="profile-img"
                src={Image1}
                height="380px"
                width="auto"
                alt={'error'}
              />
              <div className="mask rgba-white-slight"></div>
            </div>
          </div>
          <Accordion className="about-accordion" defaultActiveKey="1">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                  A Little More About Me
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                {/* <Card.Body className="row">
                    <div className="col-6" align="wrap">
                      {paragraph2}
                    </div>

                    <div className="col-6">
                      <img
                        className="cooking-img"
                        align="right"
                        src={Image2}
                        height="480px"
                        width="auto"
                        alt={'error'}
                      />
                    </div>
                </Card.Body> */}
                <div class="second-container">
                  <div className="col-6">
                    <img
                      className="cooking-img"
                      // float="right"
                      src={Image2}
                      // height="480px"
                      // width="auto"
                      alt={'error'}
                    />
                  </div>
                 
                    <p>
                      {paragraph2}
                    </p>
                  </div>
                
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
