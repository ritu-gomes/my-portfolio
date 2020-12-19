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
                <div className="col-md-6 text-light text-center text-md-left pr-5 mb-4 mb-md-0">
                    <img style={{width: "40%", borderRadius: "50%"}} className="profile mb-3" src={owner} alt=""/>
                    <h2>Hi I'm</h2>
                    <h1><span>Irene Ritu Gomes</span></h1>
                    <p>A passionate and enthusiastic <span>Web Developer</span>, having a great interest to work with JavaScript, ReactJS, MERN stack developement etc. Doing my BSc in Computer Science and Engineering. Looking forward to bringing my passion to a full-time role.</p>
                    <p>You can reach me at - irengomes018@gmail.com</p>
                    <a href="https://github.com/ritu-gomes" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{color: "white", fontSize: "30px", marginRight: "10px"}}/></a>
                    <a href="https://www.linkedin.com/in/irene-ritu-gomes-61a9101ba/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{color: "white", fontSize: "35px"}}/></a>
                </div>
                <div className="col-md-6 text-light px-3">
                    <h3 style={{color: "#e94949"}}>My Skills</h3>
                    <ul style={{listStyle: "none"}}>
                        <li>HTML, CSS</li>
                        <li>Bootstrap, Material-UI, Sass</li>
                        <li>Javascript, React.js, Redux</li>
                        <li>MongoDB, Firebase</li>
                        <li>Node.js, Express.js</li>
                        <li>Git, Heroku, Figma</li>
                    </ul>
                    <h3 style={{color: "#e94949"}}>Familiar To</h3>
                    <ul style={{listStyle: "none"}}>
                        <li>C, C++</li>
                        <li>Mysql</li>
                        <li>jQuery</li>
                        <li>Stripe</li>
                    </ul>
                </div>
                </div>
            </section>
        </div>
    );
};

export default About;