import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link as LinkRouter } from 'react-router-dom';
import Placeholder from '../../Images/Placeholder.jpg';
import { FaLinkedin, FaFacebook, FaTwitter, FaQuora, FaYoutube, FaWhatsapp } from 'react-icons/fa';


const { Meta } = Card;
const Resource = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Schedule Appointments',
      description: 'View and Manage Your Upcoming Therapy Sessions.',
      image: Placeholder,
    },

    {
      id: 2,
      title: 'Medication Tracker',
      description: 'Track and Manage Your Prescribed Medications.',
      image: Placeholder,
    },
    
    {
      id: 3,
      title: 'Mood Journal',
      description: 'Record and Monitor Your Daily Mood and Emotions.',
      image: Placeholder,
    },
    
    {
      id: 4,
      title: 'Therapist Notes',
      description: 'Access Notes and Feedback From Your Therapist.',
      image: Placeholder,
    },
        
    {
      id: 5,
      title: 'Payment Service',
      description: 'Choose Your Payment Plan and Manage Your Fees all.',
      image: Placeholder,
    },
    
    {
      id: 6,
      title: 'Resources Library',
      description: 'Browse Educational Materials and Helpful Resources.',
      image: Placeholder,
    },
  ];

 return (
    <div className='blogContainer'
      style={{ 
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding: '3rem'
    }}>
      
      {/** Mindset*/}
      <section id='Mindset'>
        <div className='blogHeader'
          style={{
            backgroundColor: 'pink',
            display: 'flex', 
            padding: '2rem',
            marginBottom: '1rem',
            border: 'none',
            borderRadius: '2rem'
          }}>
         
          <h2 
            style={{
              fontSize: '3rem',
              color: '#fff',
              textAlign: 'center',
            }}> Mindset ipsum dolor sit amet </h2>
        
          <p 
            style={{
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: '#fff', 
              textAlign: 'center',
              lineHeight: 1.6,
              width: '55%',
              marginTop: '1rem' 
            }}>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt."<br/>
          <cite style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold', lineHeight: 2, marginRight: '1rem'}}> ~ Mr. Galloway</cite></p>
        </div>
      
        <div className='blogContent'
          style={{
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '1rem'
          }}>
        
          <Row gutter={25}>
            {blogPosts.map((post) => (
              <Col span={8} key={post.id}>
                <Card 
                  style={{
                    backgroundColor: 'pink',
                    border: 'none', 
                    marginBottom: '1rem'
                  }}

                  hoverable
                  cover={ <img src={post.image} alt={post.title} style={{backgroundRepeat: 'no-repeat'}} />} >

                  <Meta title={post.title} description={post.description} />
                  <LinkRouter to='/newpage'><Button style={{backgroundColor: 'purple', border: 'none', marginTop: '1rem'}}>Read More</Button></LinkRouter>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/** Diet*/}
      <section id='Diet'>
        <div className='blogHeader'
          style={{
            backgroundColor: 'pink',
            display: 'flex', 
            padding: '2rem',
            marginTop: '1rem',
            border: 'none',
            borderRadius: '2rem'
          }}>
        
          <h2 
            style={{
              fontSize: '3rem',
              color: '#fff',
              textAlign: 'center',
            }}> Diet ipsum dolor sit amet</h2>
        
          <p 
            style={{
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: '#fff', 
              textAlign: 'center',
              lineHeight: 1.6,
              width: '55%',
              marginTop: '1rem' 
            }}>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt."<br/>
          <cite style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold', lineHeight: 2, marginRight: '1rem'}}> ~ Mr. Galloway</cite></p>
        </div>
      
        <div className='blogContent'
          style={{
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '1rem'
          }}>
        
          <Row gutter={20}>
            {blogPosts.map((post) => (
              <Col span={8} key={post.id}>
                <Card 
                  style={{
                    backgroundColor: 'pink',
                    border: 'none', 
                    marginBottom: '1rem'
                  }}

                  hoverable
                  cover={ <img src={post.image} alt={post.title} style={{backgroundRepeat: 'no-repeat'}} />} >
  
                  <Meta title={post.title} description={post.description} />
                  <LinkRouter to='/newpage'><Button style={{backgroundColor: 'purple', border: 'none', marginTop: '1rem'}}>Read More</Button></LinkRouter>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/** Lifestyle*/}
    
      <section id='Lifestyle'>
        <div className='blogHeader'
          style={{
            backgroundColor: 'pink',
            display: 'flex', 
            padding: '2rem',
            marginTop: '1rem',
            border: 'none',
            borderRadius: '2rem'
          }}>
        
          <h2 
            style={{
              fontSize: '3rem',
              color: '#fff',
              textAlign: 'center',
            }}> Lifestyle ipsum dolor sit amet</h2>
        
          <p 
            style={{
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: '#fff', 
              textAlign: 'center',
              lineHeight: 1.6,
              width: '55%',
              marginTop: '1rem' 
            }}>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt."<br/>
          <cite style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold', lineHeight: 2, marginRight: '1rem'}}> ~ Mr. Galloway</cite></p>
        </div>
      
        <div className='blogContent'
          style={{
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '1rem'
          }}>  
        
          <Row gutter={20}>
            {blogPosts.map((post) => (
              <Col span={8} key={post.id}>
                <Card 
                  style={{
                    backgroundColor: 'pink',
                    border: 'none', 
                    marginBottom: '1rem'
                  }}

                  hoverable
                  cover={ <img src={post.image} alt={post.title} style={{backgroundRepeat: 'no-repeat'}} />} >

                  <Meta title={post.title} description={post.description} />
                  <LinkRouter to='/newpage'><Button style={{backgroundColor: 'purple', border: 'none', marginTop: '1rem'}}>Read More</Button></LinkRouter>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <a href='#' style={{textAlign: 'center', marginTop: '3rem', marginBottom: '2rem'}}>Back to Top</a>

      <div className='socialMedia' style={{color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}}>
        Follow us at 
        <div className='sm-icon'><FaLinkedin aria-label='LinkedIn' size={25} /></div>
        <div className='sm-icon'><FaTwitter aria-label='Twitter' size={25} /></div>
        <div className='sm-icon'><FaFacebook aria-label='Facebook' size={25} /></div>
        <div className='sm-icon'><FaQuora aria-label='Quora' size={25} /></div>
        <div className='sm-icon'><FaYoutube aria-label='YouTube' size={25} /></div>
        <div className='sm-icon'><FaWhatsapp aria-label='Whatsapp' size={25} /></div>
      </div>
    </div>
  );
};

export default Resource;