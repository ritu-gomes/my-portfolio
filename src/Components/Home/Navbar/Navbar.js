import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <section className="navigation container">
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/home">Irene Ritu Gomes</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav options ml-auto">
                        <a className="nav-link mr-3" href="a">Home</a>
                        <a className="nav-link mr-3" href="d">Projects</a>
                        <a className="nav-link mr-3" href="a">Blogs</a>
                        <a className="nav-link mr-3" href="a">About</a>
                        <button className="btn btn-dark">
                            <a href="https://drive.google.com/file/d/1fRkxtxd2y1WkkZjHoE9dp4ioFw6v6AJ_/view?usp=sharing">Resume</a>
                        </button>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;