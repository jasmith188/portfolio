// import React from "react";

// const Portfolio = ({ data }) => {
//   if (data) {
//     var projects = data.projects.map(function (projects) {
//       var projectImage = "images/portfolio/" + projects.image;
//       return (
//         <div key={projects.title} className="columns portfolio-item">
//           <div className="item-wrap">
//             <a href={projects.url} title={projects.title}>
//               <img alt={projects.title} src={projectImage} />
//               <div className="overlay">
//                 <div className="portfolio-item-meta">
//                   <h5>{projects.title}</h5>
//                   <p>{projects.category}</p>
//                 </div>
//               </div>
//               <div className="link-icon">
//                 <i className="fa fa-link"></i>
//               </div>
//             </a>
//           </div>
//         </div>
//       );
//     });
//   }

//   return (
//     <section id="portfolio">
//       <div className="row">
//         <div className="twelve columns collapsed">
//           <h1>Check Out Some of My Work</h1>

//           <div
//             id="portfolio-wrapper"
//             className="bgrid-quarters s-bgrid-thirds cf"
//           >
//             {projects}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import React from 'react';
import {
  MDBJumbotron,
  MDBContainer,
  MDBIcon,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
} from 'mdbreact';

const Portfolio = ({ projects }) => {
  return (
    <MDBContainer id="portfolio" className="mt-5 text-center">
      <h1>Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <MDBJumbotron>
            <MDBCardBody>
              <MDBCardTitle className="overlay">{project.title}</MDBCardTitle>
              <MDBCardImage src={project.imageSrc} className="img-fluid" />
              <p className="blue-text my-4 font-weight-bold">{project.tools}</p>
              <card>{project.info}</card>
              <hr className="my-4" />
              <div className="btn-toolbar">
                <button href={project.demo} className="waves-effect">
                  App <MDBIcon far icon="gem" />
                </button>
                <button href={project.github} className="waves-effect">
                  Github <MDBIcon far icon="gem" />
                </button>
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        ))}
      </div>
    </MDBContainer>
  );
};

export default Portfolio;
