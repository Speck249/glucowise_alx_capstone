import React, { useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import Scrollspy from 'react-scrollspy'
import { FaBars } from 'react-icons/fa';
import GlucoWise from '../../Images/Logo.png';
import './Navigation.css';


const Navigation = () => {
  const [top, setTop] = useState('');
  // Comment the following JavaScript.
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

  return (
    <Scrollspy
      items={ ['About', 'Usage', 'Insurance'] }
      currentClassName='active'
      offset={-100} 
    >

      <nav className={`navContainer ${top}`}>
        <div className='navLogo'>
          <LinkRouter to='/'>
            <img
              src={GlucoWise}
              width={58}
              height={50}
              alt='GlucoWise Logo'
            />
          </LinkRouter>
        </div>

        <div className='sidebarContainer'>
          <FaBars aria-label='Bar Icon' />
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
            <LinkScroll to='/dashboard'> Dashboard </LinkScroll>
          </div>

          <div className='navItem'>
            <LinkScroll to='/support'> Support </LinkScroll>
          </div>

          <div className='navItem'>
            <LinkScroll to='/blog'> Resource </LinkScroll>
          </div>
        </div>
      
        <div className='navButton'>
          <LinkScroll to='/login'> Get Started </LinkScroll>
        </div>
      </nav>
    </Scrollspy>
  );
};

export default Navigation;