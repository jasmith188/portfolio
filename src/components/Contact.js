import React from 'react';
import '../App.css';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div id="contact" className="contact-container">
        <div className="contact-jumbotron">
          <div className="contact-row row">
            <div className="col-md-7 text-md-left ml-3 mt-3">
              <h2>Connect with me</h2>
              <br />
              <p>Want to get in touch?</p>

              <p>Let's collaborate</p>
              <p>
                <a href="tel:704-909-8461">Cell Phone: (704)-909-8461</a>
              </p>
              <p>
                {/* <a href="https://docs.google.com/document/d/1jQ01tXNrs9hSdPc4pE2GaUnmryYHTU4RS6BHQNDX5v0/edit?usp=sharing">
                  Resume
                </a> */}
              </p>
              <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/mvovzakj"
                method="POST"
              >
                <div className="label-name">
                  <label>Name: </label>
                  <input type="text" name="name" required />
                </div>
                <br />
                <div className="label-email">
                  <label>Email: </label>
                  <input type="email" name="email" required />
                </div>
                <br />
                <div className="label-subject">
                  <label>Subject: </label>
                  <input type="text" name="subject" />
                </div>
                <br />
                <div className="label-message">
                  <label>
                    Message: <span className="required"></span>{' '}
                  </label>
                  <textarea type="text" name="message" required />
                </div>
                {status === 'SUCCESS' ? (
                  <p>
                    Thanks for messaging me. I'll get back to you as soon as
                    possible!
                  </p>
                ) : (
                  <button className="btn-primary">Submit</button>
                )}
                {status === 'ERROR' && <p>Ooops! There was an error.</p>}
              </form>
            </div>
            <div className="col-md-4 offset-md-1 mx-3 my-3">
              <div className="view overlay">
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
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}
