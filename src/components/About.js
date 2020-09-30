import React from 'react';
import { Button } from 'react-bootstrap';
import Typical from 'react-typical';
import Image1 from '../images/profile.jpeg';
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
                  ' am a developer 💻.',
                  900,
                  ' use to be a chef 👨‍🍳.',
                  900,
                  ' always trying to learn something new 🤓.',
                  900,
                  ' love the outdoors 🤿  🚴🏻‍♂️  🏄‍♂️  🏀  🏈',
                  900,
                ]}
              />
            </p>
            <p>{paragraph}</p>
            <p>{paragraph2}</p>
            <Button
              className="resume-button"
              variant="outline-success"
              href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:5751e841-0449-4830-aeb5-62ab60f282fc"
            >
              Click To View My Resume
            </Button>
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
        </div>
      </div>
    </div>
  );
};

export default About;
