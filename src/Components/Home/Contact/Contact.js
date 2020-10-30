import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className="contact container py-5">
            <h2 className="mb-5" style={{color: "#e94949"}}>I'd Love To Hear From You</h2>
            <form className="form-area">
                <input className="form-control mb-3 py-3" type="text" name="name" placeholder="Your Name"/>
                <input className="form-control mb-3 py-3" type="email" name="email" placeholder="Email"/>
                <textarea className="form-control mb-3" name="message" placeholder="Mesage" rows="5"></textarea>
                <input className="form-control btn" type="submit" value="send"/>
            </form>
        </section>
    );
};

export default Contact;