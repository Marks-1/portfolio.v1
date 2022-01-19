import React from "react";
import image from './ST 1.jpg';

const Projects = () => {
    return(
        <section id="projects">
            <div className="project-card">
                <img src={image} alt="project1" />
            </div>
            <div className="project-card">
                <img src={image} alt="project2" />
            </div>
            <div className="project-card">
                <img src={image} alt="project3" />
            </div>
            <div className="project-card">
                <img src={image} alt="project4" />
            </div>
            <div className="project-card">
                <img src={image} alt="project5" />
            </div>
            <div className="project-card">
                <img src={image} alt="project6" />
            </div>
        </section>
    )
}
export default Projects