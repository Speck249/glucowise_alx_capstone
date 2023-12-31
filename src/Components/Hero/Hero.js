import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import Slider from 'react-slick';
import PricingCard from './PricingCard';
import { FaAndroid, FaApple, FaChartBar, FaChrome, FaLaptop, FaMobile } from 'react-icons/fa';
import GlucoWise from '../../Images/Empowering.jpg';
import Insurance from '../../Images/Insurance.jpg';
import Adwoa from '../../Images/Adwoa.png';
import Ama from '../../Images/Ama.png';
import Kofi from '../../Images/Kofi.png';
import Ngozi from '../../Images/Ngozi.png';
import Kwame from '../../Images/Kwame.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';


const Hero = () => {
   const pricingOptions = [
    {
      title: 'Basic',
      price: '$9.99/month',
      features: [
        'GlucoWise Patch Integration',
        'Glucose Monitoring',
        'Carbohydrate Tracking',
        'Real-Time Data Report',
      ]
    },
    {
      title: 'Standard',
      price: '$19.99/month',
      features: [
        'All Basic features',
        'Trend Analysis',
        'Medication Reminders',
        'Hypo/Hyperglycemia Alerts'
      ]
    },
    {
      title: 'Premium',
      price: '$29.99/month',
      features: [
        'All Standard features',
        'Data Sharing',
        'Mealtime Suggestions',
        'Historical Data Analysis'
      ]
    }
  ];

  
  return (
    <>
        <div className='heroContainer'>
          <div className='overlay'>
            <div className='overlayText' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20rem', padding: '1rem' }}>
              <h2 style={{ fontSize: '3rem', width: '45%', textAlign: 'center' }}>Welcome to GlucoWise</h2>
              <h3 style={{ fontSize: '1rem', fontWeight: 'lighter', textAlign: 'center', padding: '1rem', width: '35%'}}>Smart Solution for Effortless Glucose Monitoring</h3>
              <LinkRouter to='/dashboard'><button className='navButton' style={{ width: 'fit-content' }}>Get Started</button></LinkRouter>
            </div>
          </div>
        </div>

      <div className='infoContainer'>
        <div className='cardContent'>
          <div className='Icon'><FaChartBar size={30} /></div>
          <div className='Title'>GlucoWise CGM</div>
          <div className='Description'>Experience real-time data by seamlessly connecting to GlucoWise Continuous Monitor</div>
        </div>

        <div className='cardContent'>
          <div className='Icon'><FaChrome size={30} /> </div>
          <div className='Title'>Chrome Extension</div>
          <div className='Description'>Immerse yourself in vibrant content with the newly released Chrome extension.</div>
        </div>

        <div className='cardContent'>
          <div className='Icon'><FaAndroid size={30} /></div>
          <div className='Title'>Android</div>
          <div className='Description'>Carry GlucoWise in your pocket with the Android application available on PlayStore.</div>
        </div>

        <div className='cardContent'>
          <div className='Icon'><FaApple size={30} /></div>
          <div className='Title'>iOS</div>
          <div className='Description'>Ready to experience GlucoWise on your latest iPhone? Download today from the AppStore.</div>
        </div>

        <div className='cardContent'>
          <div className='Icon'><FaMobile size={30}/><FaLaptop size={30}/></div>
          <div className='Title'>Dark Mode</div>
          <div className='Description'>Embrace a new dimension of style and comfort with Dark Mode on your mobile app</div>
        </div>
      </div>
        
      <div className='siteFeature'>
        <section id='About'>
          <h2>About GlucoWise</h2>
          <div className='aboutContainer'>
            <div className='imgWrap1'>
              <img src={GlucoWise} alt='Woman with Sensor Patch' width={560} height={290} style={{ border: 'none', borderRadius: '1.2rem' }} />
            </div>
        
            <div className='textWrap'>
              <h3> Empowering Diabetics with Real-time Health Insights </h3>

              <p>At GlucoWise, we understand the challenges faced by diabetic patients in managing their health effectively. That's why we have developed
              a cutting-edge web application that provides real-time data and insights to diabetic patients wearing our sensor patch. With GlucoWise, 
              you can stay informed and in control of your health status like never before. <br /> <br /> Our web application seamlessly connects with the sensor patch, 
              capturing and analyzing important health data such as blood glucose levels, trends, and patterns. Through an intuitive interface, GlucoWise
              empowers you to make informed decisions about your diet, exercise, and medication regimens.  </p>
            </div>
          </div>
        </section>

        <section id='Pricing' className='pricing-section' style={{  textAlign: 'center', padding: '20px' }}>
          <h2 style={{ marginBottom: '2rem', fontSize: '2.7rem' }}>Pricing Packages</h2>
          <div className="pricing-cards" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {pricingOptions.map((option, index) => (
          <PricingCard
            key={index}
            title={option.title}
            price={option.price}
            features={option.features}
          />
         ))}
         </div>
        </section> 

        <section id='Insurance'>
          <h2>Cost & Coverage</h2>
          <div className='insuranceContainer'>
            <div className='textWrap'>
              <h3> Accessible Diabetes Management for All </h3>
              <p>At GlucoWise, we believe that every diabetic patient deserves access to effective and affordable health management solutions. Join us in 
              our mission to provide comprehensive diabetes management solutions to empower low-income patients on their health journey. <br /> <br/>
              <span>Cost-Effective Solutions</span>: We strive to keep our services accessible without compromising on quality. GlucoWise offers flexible pricing options
              and cost-effective packages tailored to meet the needs of low-income patients. <br /> <br/> 
              <span>Coverage Plans</span>: GlucoWise collaborates with insurance
              providers and government programs to offer coverage plans that cater specifically to low-income individuals. <br /> <br/> 
              <span>Financial Assistance</span>: We offer financial assistance programs for eligible low-income patients. These initiatives are designed to provide 
              additional support and reduce the financial burden associated with diabetes management.  </p>
            </div>

            <div className='imgWrap2'>
              <img src={Insurance} alt='Journal' width={480} height={380} style={{ border: 'none', borderRadius: '1.2rem' }} />
            </div>
          </div>
        </section>

        <h2 style={{ fontSize: '2.7rem', fontWeight: 'bold', textAlign: 'center', color: '#602E17', backgroundColor: 'burlywood', padding: '2rem'}}>Testimonials</h2>
        <Slider
          infinite={true}
          speed={500}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={4000}
          className='testimonial-carousel'>
            <div><img src={Adwoa} alt='Customer Testimonial' width={350} height={320} /></div>
            <div><img src={Ama} alt='Customer Testimonial' width={350} height={320} /></div>
            <div><img src={Kofi} alt='Customer Testimonial' width={350} height={320} /></div>
            <div><img src={Ngozi} alt='Customer Testimonial' width={350} height={320} /></div>
            <div><img src={Kwame} alt='Customer Testimonial' width={350} height={320} /></div>
        </Slider>
      </div>  
    </>
  );
}

export default Hero;