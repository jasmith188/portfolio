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

const Portfolio = ({ projects }) => {
  return (
    <div id="portfolio" className="portfolio mt-5 text-center">
      <h1>Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <div className="card">
            <div className="portfolio__title">{project.title}</div>
            {/* <div >
              <button >
                <a className='portfolio__githubButton' href={project.github}>Github</a>
              </button>
            </div> */}
            <a href={project.demo} className="waves-effect">
              <img
                src={project.imageSrc}
                className="portfolio__projectImage"
                alt="project-display"
              />
            </a>
            <p className="blue-text my-4 font-weight-bold">{project.tools}</p>
            <card>{project.info}</card>
            <hr className="my-4" />
            <div className="btn-toolbar"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
