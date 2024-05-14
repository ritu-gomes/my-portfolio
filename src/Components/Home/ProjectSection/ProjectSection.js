import React from 'react';
import project1 from '../../../images/creative-agency.PNG';
import project2 from '../../../images/volunteer.PNG';
import project3 from '../../../images/travel-guru.PNG';
import mealImage from '../../../images/meal-mate.png';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';
import './project.css';

const ProjectSection = () => {
    return (
        <section className="project-section container py-5">
            <h2 className="mb-5" style={{color: "#e94949"}}>Some Of My Projects</h2>
            <ProjectCard img={mealImage} title="Meal-Mate" detail="Diet meal providing app" git="https://github.com/ritu-gomes/meal-mate-client"></ProjectCard> 
            <ProjectCard img={project1} title="Creative Agency" detail="A technical service providing website" git="https://github.com/ritu-gomes/creative-agency-client" live="https://creative-agency-438f0.web.app/"></ProjectCard> 
            <ProjectCard img={project3} title="Travel Guru" detail="A website for travellers" git="https://github.com/ritu-gomes/travel-guru-assignment-09" live="https://travel-guru-assignment09.netlify.app/"></ProjectCard> 
            <Link className="btn" to="/projects">See All Projects...</Link>     
        </section>
    );
};

export default ProjectSection;