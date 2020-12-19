import React from 'react';
import owner from '../../../images/20201219_224053.jpg';
import './header.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = () => {
    return (
        <section className="header container text-light py-5">
            <div className="row d-flex align-items-center justify-content-between flex-column-reverse flex-md-row p-5">
                <div className="col-md-6">
                    <h2>Hi I'm</h2>
                    <h1><span>Irene Ritu Gomes</span></h1>
                    <p>A passionate and enthusiastic <span>Web Developer</span>, having a great interest to work with JavaScript, ReactJS, MERN stack developement etc. Doing my BSc in Computer Science and Engineering. Looking forward to bringing my passion to a full-time role.</p>
                    <p>You can reach me at - irengomes018@gmail.com</p>
                    <a href="https://github.com/ritu-gomes" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{color: "white", fontSize: "30px", marginRight: "10px"}}/></a>
                    <a href="https://www.linkedin.com/in/irene-ritu-gomes-61a9101ba/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{color: "white", fontSize: "35px"}}/></a>
                </div>
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img className="profile" src={owner} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Header;