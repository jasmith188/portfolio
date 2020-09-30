import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-jumbotron">
        <div className="contact-row row">
          <div className="col-md-7 text-md-left ml-3 mt-3">
            <h2>Connect with me</h2>
            <br />
            <p>Want to get in touch?</p>
            
            <p>Let's collaborate</p>
            <p><a href='tel:704-909-8461'>Cell Phone: (704)-909-8461</a></p>
          </div>
          <div className='col-md-4 offset-md-1 mx-3 my-3'>
            <hr className="my-2" />
            <div className="social-media-icons">
              <a
                href="mailto: jasmith.188@gmail.com"
                alt=""
                className="fa fa-google"
              >
                {}
              </a>
              <a
                href="https://www.linkedin.com/in/jamessmith812/"
                className="fa fa-linkedin"
              >
                {}
              </a>
              <a
                href="https://www.instagram.com/jimmysmith812"
                className="fa fa-instagram"
              >
                {}
              </a>
              <a
                href="https://www.github.com/jasmith188"
                className="fa fa-github"
              >
                {}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
