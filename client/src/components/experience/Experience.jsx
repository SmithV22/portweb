
import React from 'react' ;
import { GiStarShuriken } from 'react-icons/gi' ;

import './experience.css' ;

const Experience = () => {
    return (
        <section id='experience'>
            <h5>My Skills</h5>
            <h2 className='experience__heading'>Technical Skills</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <GiStarShuriken className='experience__details-icons'/>
                            <div>
                                <h4>HTML5</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <GiStarShuriken className='experience__details-icons' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <GiStarShuriken className='experience__details-icons' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <GiStarShuriken className='experience__details-icons' />
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <GiStarShuriken className='experience__details-icons' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <GiStarShuriken className='experience__details-icons' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend - Middleware</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <GiStarShuriken className='experience__details-icons' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <GiStarShuriken className='experience__details-icons' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <GiStarShuriken className='experience__details-icons' />
                            <div>
                                <h4>Express</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <GiStarShuriken className='experience__details-icons' />
                            <div>
                                <h4>Flask</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <GiStarShuriken className='experience__details-icons' />
                            <div>
                                <h4>Java Spring</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <GiStarShuriken className='experience__details-icons' />
                            <div>
                                <h4>Various libraries</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience ;