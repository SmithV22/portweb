
import React from 'react' ;
import { useSelector } from 'react-redux';
import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import CV from '../../assets/febRes.pdf' ;

const Cta = () => {

    const { user } = useSelector((state) => state.auth);
    const alert = () => toast('Please sign in to use this function') ;

    return (
        <div className='cta'>
            { user ? (
                <a href={ CV } download className='btn'>Download CV</a>
            ) : (
                <button className=' btn' onClick={ alert }>Download CV</button>
                )} 
            <a href="#contact" className='btn btn-primary'>Chat With Me</a>
        </div>
    )
}

export default Cta ;