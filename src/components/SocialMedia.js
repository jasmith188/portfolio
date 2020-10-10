import React from 'react';
import '../App.css';

const SocialMedia = () => {
  return (
    <div className="social-media-container">
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
  );
};

export default SocialMedia;
