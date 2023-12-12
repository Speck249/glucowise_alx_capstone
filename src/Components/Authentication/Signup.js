import React from 'react';
import { Link } from 'react-router-dom';
import Google from '../../Images/googleIcon.png';
import './Signup.css'


const Signup = () => {
  return (
    <div className='signupContainer'>
      <div className='formWrap'>
        <div className='formContent'>
          <div className='form'> 
            <h1>SIGN UP</h1>
            <button className='googleContainer'><span className='imgContainer'>
              <img 
                src={Google}
                width={25}
                height={25}
                alt='Google Icon'/></span> 
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
                type='text'
                id='firstName'
                name='firstName'
              //value={firstName}
              //onChange={(e) => setfirstName(e.target.value)} 
                placeholder='Aster'
                autoComplete='on'
                autoFocus
                required
              />
       
              <input
                type='text'
                id='lastName'
                name='lastName'
              //value={lastName}
              //onChange={(e) => setlastName(e.target.value)} 
                placeholder='Awoke' 
                autoComplete='on'
                required
              />
            </div>

            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email-input'
              name='email-input'
            //value={email}
            //onChange={(e) => setEmail(e.target.value)}
              placeholder='asterawoke@gmail.com'
              autoComplete='on'
              required
            />
            
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='pwd-input'
              name='pwd-input'
            //value={password}
            //onChange={(e) => setPassword(e.target.value)}
              placeholder='Create a strong password'
              autoComplete='on'
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