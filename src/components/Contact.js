import React from 'react';
import { MDBJumbotron,  MDBContainer, MDBRow, MDBCol } from 'mdbreact';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGithub, faGmail, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2>Connect with me...</h2>
            <h3>Contact me...</h3>
            <h4>Work with me...</h4>

            <hr className="my-2" />
            <div className="social-media-icons">
              <a
                href="mailto: jasmith.188@gmail.com"
                alt=""
                class="fa fa-google"
              >{}</a>
              <a
                href="https://www.linkedin.com/in/jamessmith812/"
                class="fa fa-linkedin"
              >{}</a>
              <a
                href="https://www.instagram.com/jimmysmith812"
                class="fa fa-instagram"
              >{}</a>
              <a
                href="https://www.github.com/jasmith188"
                class="fa fa-github"
              >{}</a>
            </div>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Contact;
