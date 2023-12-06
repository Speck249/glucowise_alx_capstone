import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import logo from '../../Images/Logo.png';
import './Navbar.css';

//Change Navbar Logo


const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbarLogo'>
          <LinkRouter to='/'><img src={logo} width={80} height={80} alt='GlucoWise Logo'/></LinkRouter>
        </div>  

        <div className='sidebar'>
          <FaBars />
        </div>
          
        <div className='navbarMenu'>
          <div className='navbarItems'>
            <LinkScroll to='section1' smooth={true} duration={500} offset={-50}>About GlucoWise</LinkScroll>
          </div>

          <div className='navbarItems'>
            <LinkScroll to='section3' smooth={true} duration={500} offset={-50}>How It Works</LinkScroll>
          </div>

          <div className='navbarItems'>
            <LinkScroll to='section3' smooth={true} duration={500} offset={-50}>Cost & Coverage</LinkScroll>
          </div>

           <div className='navbarItems'>
             <LinkRouter to='/dashboard'>Dashboard</LinkRouter>
          </div>

          <div className='navbarItems'>  
            <LinkRouter to='/contact'>Support</LinkRouter>
          </div>
          
          <div className='navbarItems'>
            <LinkRouter to='/blog'>Resource</LinkRouter>
          </div>
        </div>
           
        <div className='navbarButton'>
          <LinkRouter to='/login'>Get Started</LinkRouter>
        </div>
      </nav>
    </>
  );
};

export default Navbar;