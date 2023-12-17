import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link as LinkRouter } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaTwitter, FaQuora, FaYoutube, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { mindsetPosts, dietPosts, lifestylePosts } from './Data';


const { Meta } = Card;
const Resource = () => {
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
         
          <h2 style={{ fontSize: '3rem', color: 'bisque', textAlign: 'center' }}> Mindset ipsum dolor sit amet</h2>
          <p style={{
            fontSize: '0.9rem',
            fontStyle: 'italic',
            color: 'bisque', 
            textAlign: 'center',
            lineHeight: 1.5,
            width: '55%',
            marginTop: '1rem' 
          }}> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt."<br/>
            <cite style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold', lineHeight: 2, marginRight: '1rem'}}> ~ Mr. Galloway</cite></p>
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
                  <LinkRouter to='/newpage'><Button style={{backgroundColor: '#000', color: 'bisque', border: 'none', marginTop: '1rem'}}>Read More</Button></LinkRouter>
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
            }}> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
             eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt."<br/>
              <cite style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold', lineHeight: 2, marginRight: '3rem'}}> ~ Mr. Galloway</cite></p>
          </div>

          <div className='blogText' style={{ flex: 1, marginTop: '3rem', width: '50%' }}>
            <h2 style={{ fontSize: '4rem', color: '#602E17', textAlign: 'center' }}> Mindset ipsum dolor sit amet</h2>  
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
                  <LinkRouter to='/newpage'><Button style={{backgroundColor: '#602E17', color: 'bisque', border: 'none', marginTop: '1rem'}}>Read More</Button></LinkRouter>
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
            border: 'none',
            borderRadius: '2rem'
          }}>
        
          <h2 style={{ fontSize: '3rem', color: '#602E17', textAlign: 'center' }}> Lifestyle ipsum dolor sit amet</h2>
          <p style={{
            fontSize: '0.9rem',
            fontStyle: 'italic',
            color: '#602E17', 
            textAlign: 'center',
            lineHeight: 1.6,
            width: '55%',
            marginTop: '1rem' 
          }}> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt."<br/>
            <cite style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold', lineHeight: 2, marginRight: '1rem'}}> ~ Mr. Galloway</cite></p>
        </div>
      
        <div className='blogContent' style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '1rem' }}>  
          <Row gutter={20}>
            {lifestylePosts.map((post) => (
              <Col span={6} key={post.id}>
                <Card style={{ backgroundColor: '#602E17', border: 'none', marginBottom: '1rem' }}
                  hoverable
                  cover={ <img src={post.image} alt={post.title} style={{backgroundRepeat: 'no-repeat'}} />} >

                  <Meta title={post.title} description={post.description} />
                  <LinkRouter to='/newpage'><Button style={{backgroundColor: '#000', color: 'bisque', border: 'none', marginTop: '1rem'}}>Read More</Button></LinkRouter>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <a href='#' style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '3rem', marginBottom: '2rem' }}><FaArrowUp size={30} style={{ color: 'bisque' }}/> </a>

      <div className='socialMedia' style={{color: 'bisque', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}}>
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