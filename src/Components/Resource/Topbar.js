import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import Scrollspy from 'react-scrollspy';


const Topbar = () => {
  return (
    <>
      <Scrollspy
        items={ ['Home', 'Mindset', 'Diet', 'Lifestyle'] }
        currentClassName='active'
        offset={-100}>

        <Navbar expand='lg' className='bg-body-tertiary'>
          <Container 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '65px',
              paddingTop: '2rem',
              backgroundColor: '#000',
            }}>

            <Navbar.Collapse id='basic-navbar-nav' style={{color: 'bisque', cursor: 'pointer'}}>
              <Nav className='me-auto' style={{ display: 'flex' }}>
                <LinkRouter style={{ textDecoration: 'none', color: 'bisque', marginRight: '1rem' }}
                  to='/home'
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                > Home </LinkRouter>
              
                <LinkScroll style={{marginRight: '1rem'}}
                  to='Mindset'
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                > Mindset </LinkScroll>
              
                <LinkScroll style={{marginRight: '1rem'}}
                  to='Diet'
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                > Diet </LinkScroll>

                <LinkScroll
                  to='Lifestyle'
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                > Lifestyle </LinkScroll>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Scrollspy>
    </>
  );
}

export default Topbar;