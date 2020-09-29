import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-jumbotron">
        <h2>Connect with me</h2>
        <h3>Contact me</h3>
        <h4>Work with me</h4>
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
          <a href="https://www.github.com/jasmith188" className="fa fa-github">
            {}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
