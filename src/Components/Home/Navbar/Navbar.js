import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <section className="navigation sticky-top">
            <nav className="navbar container navbar-expand-lg">
                <Link className="navbar-brand" to="/">Irene Ritu Gomes</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav options ml-auto">
                        <Link className="nav-link mr-3" to="/home">Home</Link>
                        <Link className="nav-link mr-3" to="/projects">Projects</Link>
                        <Link className="nav-link mr-3" to="/blogs">Blogs</Link>
                        <Link className="nav-link mr-3" to="/about">About</Link>
                        <button className="btn">
                            <a style={{fontWeight: "500"}} href="https://drive.google.com/file/d/1XdmT9telCHAn6ktkpTDQnjRKu_l9jj2_/view?usp=sharing">Resume</a>
                        </button>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;