import React from 'react';
import Image4 from '../images/ucfbadge.png';
import Image from 'react-bootstrap/Image';

function Contact() {
  return (
    <div className="contact-page" id="contact">
      <div className=" contact jumbotron text-center hoverable p-4">
        <div className="row">
          <div className="col-md-7 text-md-left ml-3 mt-3">
            <h1>Contact Me</h1>
            <p>Phone Number: (704) 909-8461</p>
            <p />
            Email Me:
            <a href="mailto:jasmith188@gmail.com"> jasmith.188@gmail.com</a>
            <br />
            <p />
            Github:
            <a href="https://github.com/jasmith188"> github.com/jasmith188</a>
            <br />
            <p />
            Linkedin:
            <a href="https://www.linkedin.com/in/jamessmith812/">
              {' '}
              linkedin.com/in/jamessmith812
            </a>
            <p />
          </div>
          <div className="col-md-4 offset-md-1 mx-3 my-3">
            <div className="view overlay">
              <a
                href="https://api.badgr.io/public/assertions/J4qMOUgvQyW5baLRTU7I2Q?identity__email=jasmith.188%40gmail.com"
                className="badgr"
              >
                <Image
                  src={Image4}
                  rounded
                  alt={'Error'}
                  height="300px"
                  width="300px"
                />
              </a>
              <div className="mask rgba-white-slight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
