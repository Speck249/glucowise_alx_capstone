import React from 'react';
import Navigation from '../Navigation/Navigation';
import Img1 from '../../Images/Journal.jpg';
import Img2 from '../../Images/Notes.jpg';
import Img3 from '../../Images/Payment.jpg';
import Journal from '../../Images/Journal.jpg';
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
        <Navigation />
        <div className='carouselContainer'>
          <Slider {...settings}>
          <div><img src={Img1} alt='Journal' width={1520} /></div>
            <div><img src={Img2} alt='Notes' width={1520}/></div>
            <div><img src={Img3} alt='Payment' width={1520} /></div>
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
        
        <div className='siteFeature'>
          <section id='About'>
            <h2>Lorem Ipsum</h2>
            <div className='aboutContainer'>
              <div className='imgWrap'>
                <img src={Journal} alt='Journal' width={660} height={440}/>
              </div>
        
              <div className='textWrap'>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
              </div>
            </div>
          </section>

          <section id='Usage'>
            <h2>Lorem Ipsum</h2>
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
            <h2>Lorem Ipsum</h2>
            <div className='insuranceContainer'>
              <div className='imgWrap'>
                <img src={Journal} alt='Journal' width={660} height={440}/>
              </div>

              <div className='textWrap'>
                <h3> Lorem Ipsum </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
              </div>
            </div>
          </section>
        </div>  
    </>
  );
}

export default Hero;