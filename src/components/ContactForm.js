import React from 'react';
import '../App.css';
import { Form } from 'react-bootstrap';

export default class ContactForm extends React.Component {
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

              <Form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/mvovzakj"
                method="POST"
              >
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name: </Form.Label>
                  <Form.Control type="text" name="name" required />
                  {/* </Form.Group> */}
                  {/* <Form.Group controlId="exampleForm.ControlSelect1"> */}
                  <Form.Label>Email: </Form.Label>
                  <Form.Control type="email" name="email" required />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Subject: </Form.Label>
                  <Form.Control type="text" name="subject" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message: </Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    name="message"
                    required
                    rows={3}
                  />
                </Form.Group>
                {status === 'SUCCESS' ? (
                  <p>Thanks!</p>
                ) : (
                  <button className="btn-primary">Submit</button>
                )}
                {status === 'ERROR' && <p>Ooops! There was an error.</p>}
              </Form>
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
