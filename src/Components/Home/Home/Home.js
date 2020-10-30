import React from 'react';
import BlogSection from '../BlogSection/BlogSection';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ProjectSection from '../ProjectSection/ProjectSection';

const Home = () => {
    return (
        <div  style={{background: "#222"}}>
            <Navbar/>
            <Header/>
            <ProjectSection/>
            <BlogSection/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;