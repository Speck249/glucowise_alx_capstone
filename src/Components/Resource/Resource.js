import React from 'react';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import { Row, Col, Card } from 'antd';
import { FaLinkedin, FaFacebook, FaTwitter, FaQuora, FaYoutube, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { mindsetPosts, dietPosts, lifestylePosts } from './Data';


const { Meta } = Card;
const Resource = () => {
  const navigate = useNavigate();

  const handleScroll = () => {
    window.scrollTo( { top: 0, behavior:'smooth'} );
  }

  const handleBlog = () => {
    navigate('/blog');
  }

  // Return component output to Resource page. 
  return (
    <div className='blogContainer'
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding: '3rem',
        backgroundColor: '#000'
    }}>
      
      {/** Mindset Blog Posts Section */}
      <section id='Mindset'>
        <div className='blogHeader'
          style={{
            backgroundColor: '#602E17',
            display: 'flex', 
            padding: '2rem',
            marginBottom: '2rem',
            border: 'none',
            borderRadius: '2rem'
          }}>
         
          <h2 style={{ fontSize: '3rem', color: 'bisque', textAlign: 'center', width: '50%' }}> Unlock the Power of Your Mind & Stay Informed </h2>
          <p style={{
            fontSize: '0.9rem',
            fontStyle: 'italic',
            color: 'bisque', 
            textAlign: 'center',
            lineHeight: 2,
            width: '50%',
            marginTop: '1rem' 
          }}> "The greatest revolution of our generation is the discovery that human beings, by changing the inner attitudes 
           of their minds, can change the outer aspects of their lives."<br/>
            <cite style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold', lineHeight: 2, marginRight: '1rem'}}> ~ William James</cite></p>
        </div>
      
        <div className='blogContent'
          style={{
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingTop: '1rem'
          }}>
        
          <Row gutter={20}>
            {mindsetPosts.map((post) => (
              <Col span={8} key={post.id}>
                <Card style={{ background: 'burlywood', color: '#fff', border: 'none', marginBottom: '1rem' }}
                  hoverable
                  cover={ <img src={post.image} alt={post.title} style={{backgroundRepeat: 'no-repeat'}} />} >

                  <Meta title={post.title} description={post.description} />
                  <button style={{backgroundColor: '#000', color: 'bisque', border: 'none', marginTop: '1rem'}}>Read More</button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/** Diet Blog Section */}
      <section id='Diet'>
        <div className='dietSection' style={{ display: 'flex' }}>
          <div className='blogHeader'
            style={{flex: 1,
              padding: '1.5rem',
              marginTop: '2rem',
              border: 'none',
              borderRadius: '4rem',
            }}>
        
            <p style={{
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: '#602E17', 
              textAlign: 'center',
              lineHeight: 2,
              marginTop: '2rem' 
            }}> "A healthy diet is not just about eating less; it's about eating right. It fuels your body with the nutrients it needs,
            enhances your well-being, and lays the foundation for a vibrant life"<br/>
              <cite style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold', lineHeight: 2, marginRight: '3rem'}}> ~ Dr. David Katz</cite></p>
          </div>

          <div className='blogText' style={{ flex: 1, marginTop: '3rem', width: '50%' }}>
            <h2 style={{ fontSize: '3rem', color: '#602E17', textAlign: 'center', marginTop: '1rem' }}> Nourish Your Body, Transform Your Life </h2>  
          </div>
        </div>

        <div className='blogContent'
          style={{
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '1rem'
          }}>
        
          <Row gutter={20}>
            {dietPosts.map((post) => (
              <Col span={6} key={post.id}>
                <Card style={{ backgroundColor: 'transparent', border: '1px solid #602E17', marginBottom: '1rem' }}
                  hoverable
                  cover={ <img src={post.image} alt={post.title} style={{backgroundRepeat: 'no-repeat'}} />} >
  
                  <Meta title={<span style={{ color: 'bisque' }}>{post.title}</span>}description={<span style={{ color: 'bisque' }}>{post.description}</span>}/>
                  <button onClick={handleBlog} style={{backgroundColor: '#602E17', border: 'none', marginTop: '1rem' }}>Read More</button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
      
      {/** Lifestyle Blog Posts*/}
      <section id='Lifestyle'>
        <div className='blogHeader'
          style={{
            backgroundColor: 'burlywood',
            display: 'flex', 
            padding: '2rem',
            marginTop: '1rem',
            marginBottom: '2rem',
            border: 'none',
            borderRadius: '2rem'
          }}>
        
          <h2 style={{ fontSize: '3rem', color: '#602E17', textAlign: 'center', width: '50%' }}> Design Your Life, Embrace Your Lifestyle </h2>
          <p style={{
            fontSize: '0.9rem',
            fontStyle: 'italic',
            color: '#602E17', 
            textAlign: 'center',
            lineHeight: 1.6,
            width: '55%',
            marginTop: '1rem' 
          }}> "Your lifestyle is the reflection of your choices, habits, and values. Every decision you make molds the journey you embark on,
           so choose wisely and create a life that inspires and fulfills you."<br/>
            <cite style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold', lineHeight: 2, marginRight: '1rem'}}> ~ Dr. Sanjay Gupta</cite></p>
        </div>
      
        <div className='blogContent' style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '1rem' }}>  
          <Row gutter={20}>
            {lifestylePosts.map((post) => (
              <Col span={6} key={post.id}>
                <Card style={{ backgroundColor: '#602E17', border: 'none', marginBottom: '1rem' }}
                  hoverable
                  cover={ <img src={post.image} alt={post.title} style={{backgroundRepeat: 'no-repeat'}} />} >

                  <Meta title={post.title} description={post.description} />
                  <button style={{backgroundColor: '#000', color: 'bisque', border: 'none', marginTop: '1rem' }}>Read More</button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <button onClick={handleScroll} style={{ margin:'0 auto', marginTop: '2rem', marginBottom: '2rem', backgroundColor: 'transparent' }}><FaArrowUp size={35} style={{ color: 'bisque' }}/> </button>

      <div className='socialMedia' style={{color: 'bisque', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}}>
        Follow us at 
        <div className='sm-icon'><LinkRouter to='https://www.linkedin.com/' target='_blank'><FaLinkedin aria-label='LinkedIn' size={25} style={{ textDecoration: 'none', color: 'bisque'}} /></LinkRouter></div>
        <div className='sm-icon'><LinkRouter to='https://www.twitter.com/' target='_blank'><FaTwitter aria-label='Twitter' size={25} style={{ textDecoration: 'none', color: 'bisque'}} /></LinkRouter></div>
        <div className='sm-icon'><LinkRouter to='https://www.facebook.com/' target='_blank'><FaFacebook aria-label='Facebook' size={25} style={{ textDecoration: 'none', color: 'bisque'}} /></LinkRouter></div>
        <div className='sm-icon'><LinkRouter to='https://www.quora.com/' target='_blank'><FaQuora aria-label='Quora' size={25} style={{ textDecoration: 'none', color: 'bisque'}} /></LinkRouter></div>
        <div className='sm-icon'><LinkRouter to='https://www.youtube.com/' target='_blank'><FaYoutube aria-label='YouTube' size={25} style={{ textDecoration: 'none', color: 'bisque'}} /></LinkRouter></div>
        <div className='sm-icon'><FaWhatsapp aria-label='Whatsapp' size={25} /></div>
      </div>
    </div>
  );
};

export default Resource;