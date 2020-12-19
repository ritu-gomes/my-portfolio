import React from 'react';
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';
import './contactpage.css';

const ContactPage = () => {
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_soerhgo', 'template_qcup5v9', e.target, 'user_fACFsV0E0zvNZkNMhXryL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        history.push("/");
    };
    return (
        <div style={{ background: "#222" }}>
            <section className="contact-page container py-5">
                <h2 className="mb-5" style={{ color: "#e94949" }}>I'd Love To Hear From You</h2>
                <div className="row justify-content-center">
                    <div className="col-10 col-sm-8 col-md-7">
                        <form onSubmit={handleSubmit} className="form-area p-4">
                            <input className="form-control mb-3 py-4" type="text" name="name" placeholder="Your Name" />
                            <input className="form-control mb-3 py-4" type="email" name="email" placeholder="Email" />
                            <textarea className="form-control mb-3" name="message" placeholder="Message" rows="5"></textarea>
                            <input className="form-control btn" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;