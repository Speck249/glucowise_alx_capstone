import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { FaLinkedin, FaTwitter, FaFacebook, FaPhone, FaMailBulk, FaLocationArrow, FaQuora, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './Support.css';


const Support = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [supportStatus, setSupportStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const supportData = {
        fullName,
        email,
        subject,
        message,
      };

      const docRef = await addDoc(collection(db, 'support'), supportData);
      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');

      setSupportStatus(true);
      setTimeout(() => {
        setSupportStatus(null);
      }, 5000);
    } catch (error) {
      setSupportStatus(false);

      setTimeout(() => {
        setSupportStatus(null);
    }, 5000);
  }
};

    return (
      <div className='componentContainer'>
        <div className='textContainer'>
          <h1>GET IN TOUCH</h1>
          <div className='information'>
            <div className='icon'><FaPhone aria-label='Phone' size={14} /></div><span>(251) 943 678 345</span><br/>
            <div className='icon'><FaMailBulk aria-label='Email' size={14} /></div><span>support@glucowise.com</span><br/>
            <div className='icon'><FaLocationArrow aria-label='Address' size={14} /></div><span>Addis Ababa, Ethiopia</span><br/>
          </div>

          <div className='description'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. <br/> <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>

          <div className='socialMedia'>
            <div className='sm-icon'><FaLinkedin aria-label='LinkedIn' size={25} /></div>
            <div className='sm-icon'><FaTwitter aria-label='Twitter' size={25} /></div>
            <div className='sm-icon'><FaFacebook aria-label='Facebook' size={25} /></div>
            <div className='sm-icon'><FaQuora aria-label='Quora' size={25} /></div>
            <div className='sm-icon'><FaYoutube aria-label='YouTube' size={25} /></div>
            <div className='sm-icon'><FaWhatsapp aria-label='Whatsapp' size={25} /></div>
          </div>
        </div>

        <div className='supportContainer'>
          <div className='supportWrap'>
            <div className='supportContent'>
              <form onSubmit={handleSubmit}>
                <Stack spacing={1}>
                  {supportStatus === false && <Alert severity='error'>Submission Failed. Please try again.</Alert>}
                  {supportStatus === true && <Alert severity='success'>We'll get back to you shortly!</Alert>}
                </Stack>
                <label style={{marginTop: '0.5rem'}}>Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  autoComplete='on'
                  autoFocus
                  placeholder='Aster Awoke'
                  required 
                />
                
                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete='on'
                  placeholder='asterawoke@gmail.com'
                  required
                />

                <label>Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)} 
                  placeholder='Eg. Insurance'
                />
                
                <label>Message</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder='Place your message here'
                  required
                />
                
                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
};


export default Support;