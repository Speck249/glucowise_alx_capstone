import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    //const [email, setEmail] = useState('');
    //const [subscriptionStatus, setSubscriptionStatus] = useState('');

    //const handleSubmit = async (e) => {
    //  try {
    //    const newsletterData = {
    //      email
    //    };
            
    //   const docRef = await addDoc(collection(db, 'newsletters'), newsletterData);    
    //   setEmail('');    
    //   setSubscriptionStatus(true);
    //   setTimeout(() => {
    //   setSubscriptionStatus(null);
    //   }, 5000);
    //   } catch (error) {
    //     setSubscriptionStatus(false); 
    //   setTimeout(() => {
    //     setSubscriptionStatus(null);
    //   }, 5000);
    //  }
   // }
        
   return (
    <>
      <div className='FooterContainer'>
        <div className='FooterWrap'>
          <div className='Newsletter'>
            <div className='NewsletterTitle'>Subscribe to Our Weekly Newsletter.</div>
            <div className='NewsletterBody'>Get Exclusive Health Content Curated by Industry Experts.</div>
          {/* {subscriptionStatus === true && <Alert variant="success">Welcome to the PAX Community!</Alert>}
              {subscriptionStatus === false && <Alert variant="danger">Subscription Failed. Please try again.</Alert>}   */}   
              <div className='Form'>
                <div><label>Email Address</label></div>
                <div><input
                  type='email'
                  id='email'
                  //value={email}
                  placeholder='Insert Email' 
                  //onChange={(e) => setEmail(e.target.value)} required
                /></div>
                <button type='submit'>Subscribe</button>
              </div>
          </div>

          <div className='FooterLinkContainer'>
            <div className='FooterLinks'>
              <LinkRouter to='/about'>Placeholder</LinkRouter>
              <LinkRouter to='/about'>Placeholder</LinkRouter>
              <LinkRouter to='/about'>Placeholder</LinkRouter>
              <LinkRouter to='/about'>Placeholder</LinkRouter>
              <LinkRouter to='/about'>Placeholder</LinkRouter>
              <LinkRouter to='/about'>Placeholder</LinkRouter>
            </div>
                
            <div className='FooterLinks'>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
            </div>

            <div className='FooterLinks'>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
            </div>

            <div className='FooterLinks'>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
              <LinkRouter to='/services'>Placeholder</LinkRouter>
            </div>
          </div>
        </div>
          
        <div className='FooterCopyright'>
          <LinkRouter to='https://github.com/Speck249/'>PAX &copy; {new Date().getFullYear()} All Rights Reserved</LinkRouter>
        </div>
      </div>
    </>
  );
};

export default Footer;