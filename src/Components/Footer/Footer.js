import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { FaFacebook, FaLinkedin, FaQuora, FaTwitter } from 'react-icons/fa';
import './Footer.css';


const Footer = () => {
  // Firestore configuration to store subscription emails.
  const [email, setEmail] = useState('');
  const [SubscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const newsletterData = {
        email
      };
          
    // Firestore configuration to store newsletter subscription data of users.
    const docRef = await addDoc(collection(db, 'newsletter'), newsletterData);  
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
      
  // Return component output to Home page for rendering.
  return (
    <div className='footerContainer'>
      <div className='footerWrap'>
        <div className='newsletter'>
          <div className='newsletterTitle'>Subscribe to Our Weekly Newsletter.</div>
            <div className='newsletterBody'>Get Exclusive Content Curated by Health Experts.</div>
              <form className='newsletterForm' onSubmit={handleSubmit}>
                <label>Email Address</label>
                <input
                  type='email'
                  id='subscriber-email'
                  name='subscriber-email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='asterawoke@gmail.com'
                  autoComplete='on'
                  required
                />
                <button type='submit'>Subscribe</button>
              </form>
            </div>

            <div className='footerLinkContainer'>
              <div className='footerLinkWrapper'>
                <div className='footerLinks'>
                  <div className='footerLinkName'>ABOUT</div>
                    <div className='footerLink'>GlucoWise</div>
                    <div className='footerLink'>How It Works</div>
                    <div className='footerLink'>Cost & Coverage</div>
                    <div className='footerLink'>Diagnostic Tests</div>
                  </div>
                
                <div className='footerLinks'>
                  <div className='footerLinkName'>RESEARCH</div>
                    <div className='footerLink'>Research Programs</div>
                    <div className='footerLink'>Funding Procedure</div>
                    <div className='footerLink'>Research Training</div>
                    <div className='footerLink'>Grant History</div>
                </div>
              

              <div className='footerLinkWrapper'>
                <div className='footerLinks'>
                  <div className='footerLinkName' style={{ marginLeft: '0.8rem'}}>SUPPORT</div>
                    <div className='footerLink' to='https://www.facebook.com/' target='_blank'><FaFacebook style={{ marginRight: '0.3rem', marginLeft: '0.8rem' }} /> Facebook</div>
                    <div className='footerLink' to='https://www.linkedin.com/' target='_blank'><FaLinkedin style={{ marginRight: '0.3rem', marginLeft: '0.8rem' }} /> LinkedIn</div>
                    <div className='footerLink' to='https://www.twitter.com/' target='_blank'><FaTwitter style={{ marginRight: '0.3rem', marginLeft: '0.8rem' }} /> Twitter</div>
                    <div className='footerLink' to='https://www.quora.com/' target='_blank'><FaQuora style={{ marginRight: '0.3rem', marginLeft: '0.8rem' }} /> Quora</div>
                </div>
              </div>

                <div className='footerLinks'>
                  <div className='footerLinkName'>RESOURCE</div>
                  <div className='footerLink'>Health Articles</div>
                  <div className='footerLink'>Copyright</div>
                  <div className='footerLink'>Accessibility</div>
                  <div className='footerLink'>Privacy Policy</div>
                </div>
              </div>
            </div>

            <div className='footerCopyright' to='https://github.com/Speck249/'>PAX &copy; {new Date().getFullYear()} All Rights Reserved</div>
              </div>
          </div>
  );
};

export default Footer;