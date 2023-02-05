
import React from 'react' ;
import { BsLinkedin } from 'react-icons/bs' ;
import { AiOutlineGithub } from 'react-icons/ai' ;

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/victoria-smith-software-developer/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/SmithV22" target="_blank" rel="noreferrer"><AiOutlineGithub /></a>
        </div>
    )
}

export default HeaderSocials ;