import React from 'react';
import owner from '../../images/ritu4.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './about.css';

const About = () => {
    return (
        <div style={{background: "#222"}}>
            <section className="about container py-5">
            <div className="row d-flex align-items-start justify-content-between p-5">
                <div className="col-md-6 px-3 text-light">
                    <img style={{width: "40%", borderRadius: "50%"}} className="profile mb-3" src={owner} alt=""/>
                    <h2>Hi I'm <span style={{color: "#e94949"}}>Irene Ritu Gomes</span>, a Javascript <span style={{color: "#e94949"}}>Web Developer</span></h2>
                    <p>I am a student of BSc in CSE(Computer Science and Engineering) with a dream of being a software engineer. I belive in hardwork and do my Job with full dedication, which helps me to utilize my knowledge and talent for the development of both the organization and myself.</p>
                    <p>Can reach me at - irengomes018@gmail.com</p>
                    <a href="https://github.com/ritu-gomes" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{color: "white", width: "40px", marginRight: "5px"}}/></a>
                    <a href="https://www.linkedin.com/in/irene-ritu-gomes-61a9101ba/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{color: "white", width: "40px", marginRight: "5px"}}/></a>
                </div>
                <div className="col-md-6 text-light px-3">
                    <h3 style={{color: "#e94949"}}>My Skills</h3>
                    <ul style={{listStyle: "none"}}>
                        <li>HTML, CSS, Bootstrap</li>
                        <li>Javascript, React.js</li>
                        <li>MongoDB</li>
                        <li>Node.js, Express.js</li>
                        <li>Git, Firebase, Heroku, Figma</li>
                    </ul>
                    <h3 style={{color: "#e94949"}}>Familiar To</h3>
                    <ul style={{listStyle: "none"}}>
                        <li>C, C++</li>
                        <li>Mysql</li>
                        <li>sass, jquery</li>
                    </ul>
                </div>
                </div>
            </section>
        </div>
    );
};

export default About;