
import React, { useRef } from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { TbMessageShare } from 'react-icons/tb';
import emailjs from 'emailjs-com';

import './contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_azu0zlp', 'template_53ikf4l', form.current, '_RYfN4g-vsMlN55yL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset() ;
    };

    return (
        <section id='contact' className='section'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <TfiEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>VSmith@neiasoftwaredesign.com</h5>
                        <a href="mailto:VSmith@neiasoftwaredesign.com" target='_blank' rel="noreferrer">Email Me</a>
                    </article>
                    <article className="contact__option">
                        <TbMessageShare className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Messanger</h5>
                        <a href="https://www.linkedin.com/in/victoria-smith-software-developer" target='_blank' rel="noreferrer">Message Me</a>
                    </article>
                </div>
                <div>

                    <form ref={ form } onSubmit={ sendEmail } >
                        <input type="text" name='name' placeholder='Please Enter Your Name' required />
                        <input type="email" name='email' placeholder='Please Enter Your Email' required />
                        <textarea name='message' rows={7} required placeholder='Please Enter Your Message' />
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
            </div>
            <footer>
                <div className='footer__valedictions'>
                    <h3 className='thanks'>** THANK YOU FOR VISITING **</h3>
                    <h3 className='come'>** COME AGAIN TO SEE WHAT'S NEW **</h3>
                </div>
                <div className="footer__copy">
                    <small>
                        &copy; Neia Software Design
                    </small>
                    <small>  All Rights Reserved</small>
                </div>
            </footer>
        </section>

    )
}

export default Contact;