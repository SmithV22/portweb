
import React, { useState } from 'react' ;
import { Link } from 'react-router-dom' ;
import {  useNavigate } from 'react-router-dom' ;
import {  useDispatch } from 'react-redux' ;
import { BiHome, BiMessageDetail } from 'react-icons/bi' ;
import { SiAboutdotme } from 'react-icons/si' ;
import { MdOutlineComputer } from 'react-icons/md' ;
import { MdOutlineFolderSpecial } from 'react-icons/md' ;
import { FiLogIn, FiLogOut } from 'react-icons/fi' ;

import './navbar.css' ;
import { logout, reset } from '../../features/auth/authSlice' ;

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#') ;
    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <nav>
            <a href="#home" onClick={ () => setActiveNav('#home') } className={ activeNav === '#' ? 'active' : '' }><BiHome /></a>
            <a href="#about" onClick={ () => setActiveNav('#about') } className={ activeNav === '#about' ? 'active' : '' }><SiAboutdotme /></a>
            <a href="#experience" onClick={ () => setActiveNav('#experience') } className={ activeNav === '#experience' ? 'active' : '' }><MdOutlineComputer /></a>
            <a href="#portfolio" onClick={ () => setActiveNav('#portfolio') } className={ activeNav === '#portfolio' ? 'active' : '' }><MdOutlineFolderSpecial /></a>
            <a href="#contact" onClick={ () => setActiveNav('#contact') } className={ activeNav === '#contact' ? 'active' : '' }><BiMessageDetail /></a>
            <Link to="/login" onClick={ () => setActiveNav('/login') } className={ activeNav === '/login' ? 'active' : '' }><FiLogIn /></Link>
            <a href="#logout" onClick={ onLogout } className={ activeNav === '/#logout' ? 'active' : '' }><FiLogOut /></a>
        </nav>
    )
} ;

export default Navbar ;