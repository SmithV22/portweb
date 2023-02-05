
import React from 'react' ;
import Header from '../header/Header';
import Navbar from '../navbar/Navbar'; 
import About from '../about/About';
import Experience from '../experience/Experience';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';


const HomePage = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default HomePage ;