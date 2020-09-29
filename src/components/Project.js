import React from 'react';
import {
  MDBBtn,
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
} from 'mdbreact';

const Project = ({ projects }) => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          {projects.map((project) => (
            <MDBJumbotron>
              <MDBCardBody>
                <MDBCardTitle className="h2">{project.title}</MDBCardTitle>
                <MDBCardImage
                  src={project.imageSrc}
                  className="img-fluid"
                />
                <p className="blue-text my-4 font-weight-bold">
                  {project.tools}
                </p>
                <MDBCardText>
                 {project.info}
                </MDBCardText>
                <hr className="my-4" />
                <div className="pt-2">
                  <MDBBtn href={project.demo} color="primary" className="waves-effect">
                    Buy now <MDBIcon far icon="gem" />
                  </MDBBtn>
                  <MDBBtn href={project.github} outline color="primary" className="waves-effect">
                    Download <MDBIcon icon="download" />
                  </MDBBtn>
                  
                </div>
              </MDBCardBody>
            </MDBJumbotron>
          ))}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Project;
