
import React from 'react' ;

import './header.css' ;
import Me from '../../assets/me2.png' ;
import CTA from './Cta' ;
import HeaderSocial from './HeaderSocials' ;

const Header = () => {
    return (
        <header id='home'>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Victoria Smith</h1>
                <h5 className="text-light">Full Stack Developer</h5>
                <CTA />
                <HeaderSocial />
                    <div className='borderL'></div>
                    <div className='borderR'></div>
                <div className="me">
                    <img src={Me} alt="profile pic" />
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>   

    )
}

export default Header ;