import React from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';
import Typical from 'react-typical';
import Image1 from '../images/profile.jpeg';
import '../App.css';
import { MDBJumbotron, MDBBtn, MDBCardTitle, MDBContainer, MDBRow, MDBCol, MDBCardImage } from 'mdbreact';

// import Image from '../images/mountain.jpg';

const About = ({ name, paragraph, paragraph2, landingPageImage }) => {
  return (
    <div id='about' className="about">
      <div className="jumbotron text-center hoverable p-4">
        <div className="row">

          <div className="col-md-7 text-md-left ml-3 mt-3">
            <h1 className='about-intro'>Hi, I'm {name}.</h1>
            <p>
              I'm
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  ' a developer 💻.',
                  900,
                  ' a former fine-dining chef 👨‍🍳.',
                  900,
                  ' always trying to learn something new 🤓.',
                  900,
                  ' an outdoor enthusiast 🤿 🚴🏻‍♂️ 🏄‍♂️ 🏀 🏈',
                  900,
                ]}
              />
            </p>

            <p>{paragraph}</p>
            <p>{paragraph2}</p>
            <Button className='resume-button'
              variant="outline-success"
              href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:5751e841-0449-4830-aeb5-62ab60f282fc"
            >
              Click To View My Resume
            </Button>
            {''}
          </div>
          <div className="col-md-4 offset-md-1 mx-3 my-3">
            <div className="view overlay">
              <img className='profile-img' src={Image1} height="380px" width="auto" alt={'error'} />
              <div className="mask rgba-white-slight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <MDBContainer className="mt-5 text-center">
    //     <MDBJumbotron>
    //       <MDBRow>
    //         <MDBCol size="7">
    //           <MDBCardTitle className="h1 display-3">Hi, I'm {name}</MDBCardTitle>
    //           <p>
    //             I'm
    //             <Typical
    //               loop={Infinity}
    //               wrapper="b"
    //               steps={[
    //                 ' a developer 💻.',
    //                 900,
    //                 ' a former fine-dining chef 👨‍🍳.',
    //                 900,
    //                 ' always trying to learn something new 🤓.',
    //                 900,
    //                 ' an outdoor enthusiast 🤿 🚴🏻‍♂️ 🏄‍♂️ 🏀 🏈',
    //                 900,
    //               ]}
    //             />
    //           </p>
    //           <p>{paragraph}</p>
    //           <p>{paragraph2}</p>
    //           <MDBBtn
    //             className="resume-button"
    //             variant="outline-success"
    //             href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:5751e841-0449-4830-aeb5-62ab60f282fc"
    //           >
    //             Click To View My Resume
    //           </MDBBtn>
    //         </MDBCol>
    //         <MDBCol size="5" offset-md-1 mx-3 my-3>
    //           <div className="view overlay">
    //             <MDBCardImage
    //               src={landingPageImage}
    //               />
    //             <div className="mask rgba-white-slight"></div>
    //           </div>
    //         </MDBCol>
    //       </MDBRow>
    //     </MDBJumbotron>
    //   </MDBContainer>
    // </div>
  );
};

export default About;
