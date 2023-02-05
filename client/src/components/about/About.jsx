
import React from 'react' ;
import { FaAward } from 'react-icons/fa' ;
import { FiUsers } from 'react-icons/fi' ;
import { AiOutlineFileSync } from 'react-icons/ai' ;


import './about.css' ;
import AboutMe from '../../assets/me3.png' ;

const About = () => {
    return (
    
        <section id='about'>
            <h5>Get To Know</h5>
            <h2 className='about__heading'>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ AboutMe } alt="profile pic" />
                    </div>
                </div>
                <div className='about__content'>
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Recent Grad</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Developer</h5>
                            <small>Full Stack</small>
                        </article>
                        <article className='about__card'>
                            <AiOutlineFileSync className='about__icon' />
                            <h5>Projects</h5>
                            <small>See Below</small>
                        </article>
                    </div>
                    <p className='about__text'>I am a recent Full stack graduate from Coding Dojo. The stacks I studied were MERN, Java, and Python. Enjoy my website and leave me a comment. Thank you! </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
} ;

export default About ;