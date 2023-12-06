import React from 'react';
import Img1 from '../../Images/Journal.jpg';
import Img2 from '../../Images/Notes.jpg';
import Img3 from '../../Images/Payment.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAndroid, FaApple, FaChartBar, FaChrome, FaLaptop, FaMobile } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    const settings = {
      dots: true,
      infinite: true,
      //autoplay: true,
      //autoplaySpeed: 6000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <div className='carouselContainer'>
          <Slider {...settings}>
            <div><img src={Img1} alt='Journal' /></div>
            <div><img src={Img2} alt='Notes' /></div>
            <div><img src={Img3} alt='Payment' /></div>
          </Slider>
        </div>
      
        <div className='infoContainer'>
          <div className='cardContent'>
            <div className='Icon'><FaChartBar size={30} /></div>
            <div className='Title'>CGS</div>
            <div className='Description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>

          <div className='cardContent'>
            <div className='Icon'><FaMobile size={30}/><FaLaptop size={30}/></div>
            <div className='Title'>Dark Mode</div>
            <div className='Description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>

          <div className='cardContent'>
            <div className='Icon'><FaChrome size={30} /> </div>
            <div className='Title'>Chrome Extension</div>
            <div className='Description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>

          <div className='cardContent'>
            <div className='Icon'><FaAndroid size={30} /></div>
            <div className='Title'>Android</div>
            <div className='Description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>

          <div className='cardContent'>
            <div className='Icon'><FaApple size={30} /></div>
            <div className='Title'>iOS</div>
            <div className='Description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div> 
    </>
  );
}

export default Hero;