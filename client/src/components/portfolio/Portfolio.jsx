
import React from 'react';
import { useSelector } from 'react-redux';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './portfolio.css';
import World from '../../assets/world.png';
import Programming from '../../assets/programming.png';
import People from '../../assets/people.png';
import Languages from '../../assets/languages.png';
import Button from '../../assets/buttons.png';
import Doodle from '../../assets/doodle.png';

const Portfolio = () => {

    const { user } = useSelector((state) => state.auth);
    const alert = () => toast('Please sign in to use this function') ;

    const data = [
            {
                id: 1,
                image: People,
                title: 'Single Page - reactjs',
                github: 'https://github.com/SmithV22/practice',
                demo: 'https://demoreact.neiasoftwaredesign.com'
            },
            {
                id: 2,
                image: Programming,
                title: 'School Project - full stack MERN',
                github: 'https://github.com/SmithV22/todo-mern',
                demo: 'https://todo.neiasoftwaredesign.com'
            },
            {
                id: 3,
                image: Button,
                title: 'HTML Email ',
                github: 'https://github.com/SmithV22/fitbit-example',
                demo: 'https://demoemail.neiasoftwaredesign.com'
            },
            {
                id: 4,
                image: World,
                title: 'School Project - Java coming soon',
                github: 'https://github.com/SmithV22/javaProduct',
                demo: 'https://javaproduct.neiasoftwaredesign.com'
            },
            {
                id: 5,
                image: Doodle,
                title: 'Coming Soon',
                github: 'https://github.com/smithv22',
                demo: 'https://www.neiasoftwaredesign.com'
            },
            {
                id: 6,
                image: Languages,
                title: 'Coming Soon',
                github: 'https://github.com/smithv22',
                demo: 'https://www.neiasoftwaredesign.com'
            },
        ]

        return (
            <section id='portfolio'>
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>
                <div className="container portfolio__container">
                    {
                        data.map(({ id, image, title, github, demo }) => {
                            return (
                                <article className="portfolio__item" key={id}>
                                    <div className="portfolio__item-image">
                                        <img src={image} alt={title} />
                                    </div>
                                    <h4 className='portfolio__text'>{title}</h4>
                                    <div className="portfolio__item-cta">
                                        <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                        { user ? (
                                            <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                                        ) : (
                                            <button className='btn btn-primary' onClick={ alert }>Live Demo</button>
                                        )}
                                    </div>
                                    
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        )
    }

export default Portfolio;