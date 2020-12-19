import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact container py-5">
            <h2 className="mb-5" style={{ color: "#e94949" }}>I'd Love To Hear From You</h2>
            <Link className="btn" to="/contact">Drop Your Message...</Link>
        </section>
    );
};

export default Contact;