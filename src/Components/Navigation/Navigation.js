import React, { useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { useUserAuth } from '../../Context/userAuthContext';
import Scrollspy from 'react-scrollspy';
import { FaBars } from 'react-icons/fa';
import GlucoWise from '../../Images/Logo.png';
import './Navigation.css';


const Navigation = () => {
  const [top, setTop] = useState('');
  
// Create function that manages navigation bar page scroll.
  const stickyNavigation = ('scroll', () => {
    if (window !== undefined) {
      let windowLength = window.scrollY;
      windowLength > 100 ? setTop('sticky') : setTop('')
    }
  }); 

  useEffect(() => {
    window.addEventListener('scroll', stickyNavigation);
    return () => window.removeEventListener('scroll', stickyNavigation);
    }, [stickyNavigation]); 

  // Return component output to Home page.
  return (
    <Scrollspy
      items={ ['About', 'Usage', 'Insurance'] }
      currentClassName='active'
      offset={-100} 
    >

      <nav className={`navContainer ${top}`}>
        <div className='navLogo'>
          <LinkRouter to='/hero'>
            <img
              src={GlucoWise}
              width={76}
              height={68}
              alt='GlucoWise Logo'
            />
          </LinkRouter>
        </div>

        <div className='sidebarContainer'>
          <FaBars aria-label='Bar Icon' size={30}/>
        </div>

        <div className='navMenu'>
          <div className='navItem'>
            <LinkScroll
              to='About'
              activeClass='active'
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            > About GlucoWise </LinkScroll>
          </div>

          <div className='navItem'>
            <LinkScroll
              to='Usage'
              activeClass='active'
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            > How It Works </LinkScroll>
          </div>
        
          <div className='navItem'>
            <LinkScroll
              to='Insurance'
              activeClass='active'
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            > Cost & Coverage </LinkScroll>
          </div>

          <div className='navItem'>
            <LinkRouter style={{
              textDecoration: 'none',
              color: '#ffe4c4'
            }} to='/support'> Support </LinkRouter>
          </div>

          <div className='navItem'>
            <LinkRouter  style={{
              textDecoration: 'none',
              color: '#ffe4c4'
            }} to='/resource'> Resource </LinkRouter>
          </div>
        </div>
      
        <div className='navButton'>
          <LinkRouter  style={{
            textDecoration: 'none',
            color: '#ffe4c4'
          }} to='/dashboard'> Get Started </LinkRouter>
        </div>
      </nav>
    </Scrollspy>
  );
};

export default Navigation;