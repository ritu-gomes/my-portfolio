import React from 'react';
import owner from '../../../images/ritu4.jpg';
import './header.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = () => {
    return (
        <section className="header container text-light py-5">
            <div className="row d-flex align-items-center justify-content-between p-5">
                <div className="col-md-6">
                    <h1>Hi I'm <span>Irene Ritu Gomes</span>, a Javascript <span>Web Developer</span></h1>
                    <p>I am a student of BSc in CSE(Computer Science and Engineering) with a dream of being a software engineer. I belive in hardwork and do my Job with full dedication, which helps me to utilize my knowledge and talent for the development of both the organization and myself.</p>
                    <p>Can reach me at - irengomes018@gmail.com</p>
                    <a href="https://github.com/ritu-gomes" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{color: "white", width: "40px", marginRight: "5px"}}/></a>
                    <a href="https://www.linkedin.com/in/irene-ritu-gomes-61a9101ba/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{color: "white", width: "40px", marginRight: "5px"}}/></a>
                </div>
                <div className="col-md-6 text-center">
                    <img className="profile" src={owner} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Header;