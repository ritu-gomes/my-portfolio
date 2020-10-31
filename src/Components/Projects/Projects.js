import React from 'react';
import SingleProject from '../SingleProject/SingleProject';
import project1 from '../../images/creative-agency.PNG';
import project2 from '../../images/volunteer.PNG';
import project3 from '../../images/travel-guru.PNG';

const Projects = () => {
    return (
        <div style={{background: "#222"}}>
            <section className="projects container py-5">
                <h2 className="mb-5" style={{color: "#e94949"}}>My Projects</h2>
                <div className="row">
                <div className="col-md-4">
                <SingleProject img={project1} title="Creative Agency" detail="A technical service providing website" git="https://github.com/ritu-gomes/creative-agency-client" live="https://creative-agency-438f0.web.app/"></SingleProject>
                    </div> 
                <div className="col-md-4">
                <SingleProject img={project2} title="Volunteer Network" detail="A single page application for selecting volunteer activities" git="https://github.com/ritu-gomes/volunteer-network-client" live="https://volunteer-network-c921c.web.app/"></SingleProject>
                </div>
                <div className="col-md-4">
                <SingleProject img={project3} title="Travel Guru" detail="A website for travellers" git="https://github.com/ritu-gomes/travel-guru-assignment-09" live="https://travel-guru-assignment09.netlify.app/"></SingleProject> 
                    </div>         
                </div>   
            </section> 
        </div>
    );
};

export default Projects;