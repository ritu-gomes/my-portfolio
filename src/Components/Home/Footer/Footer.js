import React from 'react';

const Footer = () => {
    return (
        <footer className="container text-center text-light py-3">
            <small>Designed and Developed by Irene Ritu Gomes,{(new Date()).getFullYear()}</small>
        </footer>
    );
};

export default Footer;