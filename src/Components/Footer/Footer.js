import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram  } from 'react-icons/fa';
import './Footer.css';


const Footer = () => {
   /* const [email, setEmail] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState('');

    const handleSubmit = async (e) => {
        try {
            const newsletterData = {
                email
            };
            
            const docRef = await addDoc(collection(db, 'newsletters'), newsletterData);
            
            setEmail('');
            
            setSubscriptionStatus(true);
            setTimeout(() => {
                setSubscriptionStatus(null);
            }, 5000);
        } catch (error) {
            setSubscriptionStatus(false);
            
            setTimeout(() => {
                setSubscriptionStatus(null);
            }, 5000);
        }
    }
       */ 
    return (
      <div className='footerContainer'>
        <div className='footerWrap'>
          <div className='newsletter'>
            <div className='newsletterTitle'>Subscribe to Our Weekly Newsletter.</div>
              <div className='newsletterBody't>Get Exclusive Content Curated by Health Experts.</div>
                <div className='newsletterForm'>
                  <label>Email Address</label>
                  <input
                    type='email'
                    id='subscriber-email'
                    name='subscriber-email'
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    placeholder='asterawoke@gmail.com'
                    autoComplete='on'
                    required
                  />
                  <button type='submit'>Subscribe</button>
                </div>
             </div>

             <div className='footerLinkContainer'>
               <div className='footerLinkWrapper'>
                 <div className='footerLinks'>
                   <div className='footerLinkName'>ABOUT</div>
                     <div className='footerLink' to='/about'>GlucoWise</div>
                     <div className='footerLink' to='/about'>How It Works</div>
                     <div className='footerLink' to='/about'>Cost & Coverage</div>
                     <div className='footerLink' to='/services'>Placeholder</div>
                   </div>
                
                 <div className='footerLinks'>
                   <div className='footerLinkName'>SERVICES</div>
                     <div className='footerLink'>Placeholder</div>
                     <div className='footerLink'>Placeholder</div>
                     <div className='footerLink'>Placeholder</div>
                     <div className='footerLink'>Placeholder</div>
                 </div>
               </div>

               <div className='footerLinkWrapper'>
                 <div className='footerLinks'>
                   <div className='footerLinkName'>SUPPORT</div>
                     <div className='footerLink' to='https://www.facebook.com/' target='_blank'><FaFacebook /> Facebook</div>
                     <div className='footerLink' to='https://www.linkedin.com/' target='_blank'><FaLinkedin /> LinkedIn</div>
                     <div className='footerLink' to='https://www.twitter.com/' target='_blank'><FaTwitter /> Twitter</div>
                     <div className='footerLink' to='https://www.instagram.com/' target='_blank'><FaInstagram /> Instagram</div>
                 </div>

                 <div className='footerLinks'>
                   <div className='footerLinkName'>RESOURCE</div>
                   <div className='footerLink' to='/services'>Placeholder</div>
                   <div className='footerLink' to='/services'>Placeholder</div>
                 </div>
               </div>
             </div>

             <div className='footerCopyright' to='https://github.com/Speck249/'>PAX &copy; {new Date().getFullYear()} All Rights Reserved</div>
               </div>
            </div>
  );
};

export default Footer;