import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import Scrollspy from 'react-scrollspy';
import { FaTimes } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className='sidebarContainer' isOpen={isOpen} onClick={toggle}>
      <div className='Icon' onClick={toggle}>
        <div className='closeIcon'>
          <FaTimes />
        </div>
      </div>
       
      <Scrollspy
        items={ ['About', 'Usage', 'Insurance']}
        currentActiveClass='active'
        offset={-100}
      >
        <div className='sidebarWrapper'>
          <div className='sidebarMenu'>
            <LinkScroll to='About' activeClass='active' spy={true} smooth={true} duration={500} offset={-50} onClick={toggle}> About GlucoWise </LinkScroll>
            <LinkScroll to='Usage' activeClass='active' spy={true} smooth={true} duration={500} offset={-50} onClick={toggle}> How It Works </LinkScroll>
            <LinkScroll to='Insurance' activeClass='active' spy={true} smooth={true} duration={500} offset={-50} onClick={toggle}> Cost & Coverage </LinkScroll>
            <LinkRouter style={{ color: 'bisque', textDecoration: 'none'}} to='/support' onClick={toggle}> Support </LinkRouter>
            <LinkRouter style={{ color: 'bisque', textDecoration: 'none'}} to='/resource' onClick={toggle}> Resource </LinkRouter>
          </div>
        </div>
   
        <div className='buttonWrap'>
          <LinkRouter style={{ color: 'bisque', textDecoration: 'none'}} to='/dashboard'>Get Started</LinkRouter>
        </div>
      </Scrollspy>
    </div>
  ); 
}

export default Sidebar;