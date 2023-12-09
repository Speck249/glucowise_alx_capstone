import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaPhone, FaMailBulk, FaLocationArrow } from 'react-icons/fa';
import './Support.css';


const Support = () => {
    return (
      <div className='componentContainer'>
        <div className='textContainer'>
          <h1>GET IN TOUCH</h1>
          <div className='information'>
            <div className='icon'><FaPhone aria-label="Phone" size={20} /></div><span>(251) 943 678 345</span><br/>
            <div className='icon'><FaMailBulk aria-label='Email' size={20} /></div><span>support@glucowise.com</span><br/>
            <div className='icon'><FaLocationArrow aria-label='Address' size={20} /></div><span>Addis Ababa, Ethiopia</span><br/>
          </div>

          <div className='description'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>

          <div className='socialIcon'>
            <div><FaLinkedin aria-label="Phone" size={20} /></div>
            <div><FaTwitter aria-label='Email' size={20} /></div>
            <div><FaFacebook aria-label='Address' size={20} /></div>
          </div>
        </div>

        <div className='supportContainer'>
          <div className='supportWrap'>
            <div className='supportContent'>
              <div className='supportForm'>
                <label>Full Name</label>
                <input
                  type="text"
                  id="fullName"
                //value={fullName}
                //onChange={(e) => setFullName(e.target.value)}
                  autoComplete='on'
                  autoFocus
                  required 
                />
                
                <label>Email</label>
                <input
                  type="email"
                  id="email"
                //value={email}
                //onChange={(e) => setEmail(e.target.value)}
                  autoComplete='on'
                  required
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
                  rows={3}
                //value={message}
                //onChange={(e) => setMessage(e.target.value)}
                  required
                />
                
                <button type="submit">Submit</button>
              </div>
            </div>
        </div>
    </div>
  </div>
  );
};


export default Support;