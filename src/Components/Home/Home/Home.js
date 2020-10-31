import React from 'react';
import BlogSection from '../BlogSection/BlogSection';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import ProjectSection from '../ProjectSection/ProjectSection';

const Home = () => {
    return (
        <div style={{background: "#222"}}>
            <Header/>
            <ProjectSection/>
            <BlogSection/>
            <Contact/>
        </div>
    );
};

export default Home;