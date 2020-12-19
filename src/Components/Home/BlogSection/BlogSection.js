import React from 'react';
import react from '../../../images/react - Copy.jpg';
import js from '../../../images/javascript - Copy.png';
import jsBasic from '../../../images/JS-basic.jpg';
import map from '../../../images/js-map.png';
import BlogCard from '../BlogCard/BlogCard';
import { Link } from 'react-router-dom';
import '../BlogCard/blogSection.css';

const BlogSection = ({blog}) => {
    return (
        <section className="blog-section container py-5">
            <h2 className="mb-5" style={{color: "#e94949"}}>My Blogs</h2>
            <div className="row">
                <div className="col-md-4">
                    <BlogCard img={react} title="React Fundamentals" link="https://irene-ritu-gomes.medium.com/react-fundamentals-1dde8441418a"></BlogCard>
                </div> 
                <div className="col-md-4">
                    <BlogCard img={map} title="Few things about JavaScript and React" link="https://irene-ritu-gomes.medium.com/few-things-about-javascript-and-react-6d044f682654"></BlogCard>
                </div> 
                <div className="col-md-4">
                    <BlogCard img={jsBasic} title="Starting of JavaScript" link="https://irene-ritu-gomes.medium.com/some-essential-basic-concepts-of-javascript-e65667e6e69b"></BlogCard>
                </div> 
                {
                    blog && <div className="col-md-4">
                    <BlogCard img={js} title="Some JavaScript Concepts" link="https://irene-ritu-gomes.medium.com/few-things-about-javascript-fac7080bb214"></BlogCard>
                    </div>
                }
            </div>   
            {
                !blog && <Link className="btn" to="/Blogs">See All Blogs...</Link>
            }
        </section>
    );
};

export default BlogSection;<h2 className="mb-5" style={{color: "#e94949"}}>Some Of My Projects</h2>