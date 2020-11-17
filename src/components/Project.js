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
    <MDBContainer id="project" className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          {projects.map((project) => (
            <MDBJumbotron>
              <MDBCardBody>
                <MDBCardTitle className="h2">{project.title}</MDBCardTitle>
                <MDBCardImage src={project.imageSrc} className="img-fluid" />
                <p className="blue-text my-4 font-weight-bold">
                  {project.tools}
                </p>
                <MDBCardText>{project.info}</MDBCardText>
                <hr className="my-4" />
                <div className="btn-toolbar">
                  <MDBBtn
                    href={project.demo}
                    color="primary"
                    className="waves-effect"
                  >
                    App <MDBIcon far icon="gem" />
                  </MDBBtn>
                  <MDBBtn
                    href={project.github}
                    color="primary"
                    className="waves-effect"
                  >
                    Github <MDBIcon far icon="gem" />
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
