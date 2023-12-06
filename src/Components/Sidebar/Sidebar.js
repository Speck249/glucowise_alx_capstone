import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <>
      <div className='sidebarContainer'>
        <div className='Icon'>
          <div className='closeIcon'>
            <FaTimes />
          </div>
        </div>
       
        <div className='sidebarWrapper'>
          <div className='sidebarMenu'>
            <LinkScroll to='section1' smooth={true} duration={500} offset={-50}>About</LinkScroll>
            <LinkScroll to='section2' smooth={true} duration={500} offset={-50}>What It Does</LinkScroll>
            <LinkScroll to='section3' smooth={true} duration={500} offset={-50}>How It Works</LinkScroll>
            <LinkRouter to='/dashboard'>Dashboard</LinkRouter>
            <LinkRouter to='/blog'>Blog</LinkRouter>
            <LinkRouter to='/contact'>Contact</LinkRouter>
          </div>
       </div>
   
       <div className='buttonWrap'>
         <LinkRouter to='/login'>Get Started</LinkRouter>
       </div>
      </div>
    </>
  ); 
}

export default Sidebar;