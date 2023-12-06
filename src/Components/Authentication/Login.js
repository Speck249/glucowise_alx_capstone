import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../../Images/google_icon.png';
import './Login.css';


const LogIn = () => {
  return (
    <div className='pageContainer'>
      <div className='loginformWrap'>
        <div className='loginformContent'>
          <div className='loginform'> 
            <h1>WELCOME</h1>
            <button className='logingoogleContainer'><span className='loginimgContainer'>
              <img src={googleIcon} width={25} height={25} alt='Google Icon'/></span> 
              Log In with Google
            </button>
            
            <div className='loginLineBreak'>
              <div className='logindivider'></div>
              <div className='loginContent'>or</div>
            </div>

            <label htmlFor='email'>Email</label>
            <input
              type="email"
              placeholder="asterawoke@gmail.com" 
            //value={email}
            //onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <label htmlFor='password'>Password</label>
              <input
                type="password"
                placeholder="Create a strong password"
                //value={password}
                //onChange={(e) => setPassword(e.target.value)}
                 required
            />

            <div className='loginbtnContainer'>
              <button type='submit'>Log In</button>
            </div>

            <div className='loginprompt'> 
              <p>New to Tracker? <span><Link to='/signup'>Register</Link></span></p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;