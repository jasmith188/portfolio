import React from 'react';
import './Contact.css';
import githubLogo from '../images/github.png';
import gmailLogo from '../images/gmail.png';
import instagramLogo from '../images/instagram.png';
import linkedinLogo from '../images/linkedin.png';

const Contact = () => {
  return (
    <div className="form-wrapper" id="contact">
      <h1>Contact Me</h1>
      <div className="form-container">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="name">Your Name</label> <br />
            <input type="text" id="name" name="name" required />
          </p>
          <p>
            <label htmlFor="email">Your Email</label> <br />
            <input type="email" id="email" name="email" required />
          </p>
          <p>
            <label htmlFor="message">Message</label> <br />
            <textarea id="message" name="message" required></textarea>
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
        <div className="form-contact">
          <div>
            <a href="resume.com">
              <h1>
                <button>Download Resume</button>
              </h1>
            </a>
          </div>
          <div className="social-media-icons">
            <a
              href="https://github.com/jasmith188"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="github-logo" />
            </a>
            <a href="mailto:jasmith.188@gmail.com">
              <img src={gmailLogo} alt="gmail-logo" />
            </a>
            <a
              href="http://instagram.com/jimmysmith812"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramLogo} alt="instagram-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/jamessmith812/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="linkedin-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
