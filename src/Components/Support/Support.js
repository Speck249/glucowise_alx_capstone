import React from 'react';
import Img from '../../Images/contact.jpg';
import { FaTwitter, FaFacebook, FaLinkedin, FaPhone, FaMailBulk, FaTelegram } from 'react-icons/fa';
import './Support.css';

const Support = () => {
  /*const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [contactStatus, setContactStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const contactData = {
        fullName,
        email,
        subject,
        message,
      };

      const docRef = await addDoc(collection(db, 'contacts'), contactData);

      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');

      setContactStatus(true);
      setTimeout(() => {
        setContactStatus(null);
      }, 5000);
    } catch (error) {
      setContactStatus(false);

      setTimeout(() => {
        setContactStatus(null);
    }, 5000);
  }
}; */

  return (
    <>
      <div className='compContainer'>
        <div className='infoContainer'>
          <div className='infoWrap'>
            <h1>CONTACT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className='contact'>
            <FaPhone size={22}/>
            <p> (+251) 911 334 578</p>
            <FaTelegram size={22}/>
            <p> +(251) 913 458 034</p>
            <FaMailBulk size={22}/>
            <p>support@glucowise.com</p><br />
            <p>info@glucowise.com</p>
          </div>

          <div className='socialMedia'>
            <div className='icon'>
              <FaTwitter size={22}/>
              <FaFacebook size={22}/>
              <FaLinkedin size={22}/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed de eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>         
          
  
        <div className='formContainer'>
          <div className='form'>
            <label>Full Name </label>
            <input
              type="text"
              id="fullName"
              //value={fullName}
              //onChange={(e) => setFullName(e.target.value)} required 
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)} required
            />

            <label>Subject</label>
            <input
              type="text"
              id="subject"
              //value={subject}
              //onChange={(e) => setSubject(e.target.value)} 
            />
              
            <label>Message</label>            
            <textarea
              rows={4}
              //value={message}
              //onChange={(e) => setMessage(e.target.value)} required
            />
      
            <div className='buttonContainer'><button type="submit">Submit</button></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;