import React from 'react';
import Slider from 'react-slick';
import { FaAndroid, FaApple, FaChartBar, FaChrome, FaLaptop, FaMobile } from 'react-icons/fa';
import Carousel1 from '../../Images/Reputable.jpg';
import Carousel2 from '../../Images/Hassle.jpg';
import Carousel3 from '../../Images/Patch.jpg';
import GlucoWise from '../../Images/GlucoWise.jpg';
import Insurance from '../../Images/Insurance.jpg';
import './Hero.css';


const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; 

  return (
    <>
      <div className='carouselContainer'>
        <Slider {...settings}>
          <div><img src={Carousel1} alt='Healthcare Workers' width={1520} height={1050} />
            <div className='overlay'><h3>More than Just a Product, We Are Your Partners in Diabetes Management</h3></div>
          </div>
          <div><img src={Carousel2} alt='Diabetes Monitor' width={1470} height={1050} /></div>
          <div><img src={Carousel3} alt='Sensor Patch' width={1473} height={1050} /></div>
        </Slider>
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
          <div className='Description'>Embrace a New Dimension of Style and Comfort with Dark Mode on your Mobile App</div>
        </div>
      </div>
        
      <div className='siteFeature'>
        <section id='About'>
          <h2>About GlucoWise</h2>
          <div className='aboutContainer'>
            <div className='imgWrap1'>
              <img src={GlucoWise} alt='Journal' width={630} height={300}/>
            </div>
        
            <div className='textWrap'>
              <h3> Empowering Diabetics with Real-time Health Insights </h3>

              <p>At GlucoWise, we understand the challenges faced by diabetic patients in managing their health effectively. That's why we've developed
              a cutting-edge web application that provides real-time data and insights to diabetic patients wearing our sensor patch. With GlucoWise, 
              you can stay informed and in control of your health status like never before. <br /> <br /> Our web application seamlessly connects with the sensor patch, 
              capturing and analyzing important health data such as blood glucose levels, trends, and patterns. Through an intuitive interface, GlucoWise
              empowers you to make informed decisions about your diet, exercise, and medication regimens.  </p>
            </div>
          </div>
        </section>

        <section id='Usage'>
          <h2>How it Works</h2>
          <div className='textWrap'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </div>
        </section> 

        <section id='Insurance'>
          <h2>Cost & Coverage</h2>
          <div className='insuranceContainer'>
            <div className='textWrap'>
              <h3> Accessible Diabetes Management for All </h3>
              <p>At GlucoWise, we believe that every diabetic patient deserves access to effective and affordable health management solutions. Join us in 
              our mission to provide affordable and comprehensive diabetes management solutions to empower low-income patients on their health journey. <br /> <br/>
              <span>Cost-Effective Solutions</span>: We strive to keep our services affordable without compromising on quality. GlucoWise offers flexible pricing options
              and cost-effective packages tailored to meet the needs of low-income patients. <br /> <br/> <span>Coverage Plans</span>: GlucoWise collaborates with insurance
              providers and government programs to offer coverage plans that cater specifically to low-income individuals. <br /> <br/> <span>Financial Assistance</span>: 
              We also offer financial assistance programs for eligible low-income patients. These initiatives are designed to provide additional support and reduce the financial
              burden associated with diabetes management.  </p>
            </div>

            <div className='imgWrap2'>
              <img src={Insurance} alt='Journal' width={450} height={400}/>
            </div>
          </div>
        </section>
      </div>  
    </>
  );
}

export default Hero;