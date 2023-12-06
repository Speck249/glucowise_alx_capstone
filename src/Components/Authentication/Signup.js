import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../../Images/google_icon.png';
import './Signup.css'


const Signup = () => {
  return (
    <div className='signupContainer'>
      <div className='formWrap'>
        <div className='formContent'>
          <div className='form'> 
            <h1>SIGN UP</h1>
            <button className='googleContainer'><span className='imgContainer'>
              <img src={googleIcon} width={25} height={25} alt='Google Icon'/></span> 
              Sign up with Google
            </button>
            <div className='LineBreak'>
              <div className='divider'></div>
              <div className='dividerContent'>or</div>
            </div>

            <div className='nameLabel'>
              <label htmlFor='firstName'>First Name</label>
              <label htmlFor='lastName'>Last Name</label>
            </div>

            <div className='nameInput'>  
              <input
                type="text" 
                placeholder='Aster'
              //value={firstName}
              //onChange={(e) => setfirstName(e.target.value)} 
                required
              />
       
              <input
                type="text"
                placeholder='Awoke' 
              //value={lastName}
              //onChange={(e) => setlastName(e.target.value)} 
                required
              />
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
            
            <div className='buttonContainer'>
              <button type='submit'>Sign Up</button>
            </div>

            <div className='prompt'> 
              <p>Already have an account? <span><Link to='/login'>Log In</Link></span></p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;