import React from 'react';
// import { Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';

const Portfolio = ({ projects }) => {
  return (
     <div className="work_container">
            <h1>Projects.</h1>
            <div className="projects_container">
                {projects.map((project)=>(
                <div key={project.id} className="project">
                    <div className="image">
                        <a href={project.url}>
                            <img height='300px' width='auto' src={project.imageSrc} alt={project.title}></img>
                        </a>
                    </div>
                    <div className="title">
                        {project.title}
                    </div>
                </div>
                ))}
            </div>
        </div>
  );
};

export default Portfolio;
