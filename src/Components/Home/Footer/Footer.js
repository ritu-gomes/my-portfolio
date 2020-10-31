import React from 'react';

const Footer = () => {
    return (
        <div style={{background: "#222"}}> 
            <footer className="container text-center text-light py-3">
            <small>Designed and Developed by Irene Ritu Gomes, {(new Date()).getFullYear()}</small>
            </footer>
        </div>
    );
};

export default Footer;