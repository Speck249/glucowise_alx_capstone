import React, { useState, useEffect } from 'react';
import { useUserAuth } from '../../Context/userAuthContext';
import { useNavigate } from 'react-router-dom';
import { Link as LinkRouter } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Google from '../../Images/GoogleIcon.png';
import './Signup.css'


const Signup = () => {
  // Firebase authentication configuration for user Registration.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [infoMessage, setInfoMessage] = useState('');
  const { signUp, googleSignUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    setInfoMessage('');

 // Send verification email for registration then redirect user
 // home page once successfully logged in or terminate registration
 // attempt with error message.
    try {
      await signUp(email, password);
      setInfoMessage('Verification Email Sent');
    } catch (error) {
      setError(error.message);
      setInfoMessage('');
    }
  };

// Clear out email and password field in the event that user
// user logs in or fails to login.
  useEffect(() => {
    const clearFields = setTimeout(() => {
      setEmail('');
      setPassword('');
      setError(null);
      setInfoMessage('');
    }, 5000);

    return () => {
      clearTimeout(clearFields);
    };
  }, [email, password, error, infoMessage]);    

// Handle alternative Google registration option, which then
// redirects user to Home page once logged in or terminate attempt
// with an error message.
  const handleGoogleSignUp = async (e) => {
    try {
      await googleSignUp();
      navigate('/home');
    } catch (error) {
      console.log(error.message);
    }
  };
  
  // Return component output to Home page for rendering.
  return (
    <div className='signupContainer'>
      <div className='formWrap'>
        <div className='formContent'>
          <form id='signupForm' onSubmit={handleSignup}> 
            <Stack spacing={1}>
              {error && <Alert severity='error'>{error}</Alert>}
              {infoMessage && <Alert severity='success'>{infoMessage}</Alert>}
            </Stack>
            <h1 style={{marginTop: '0.5rem'}}>Sign Up</h1>
            <button className='googleContainer' onClick={handleGoogleSignUp}><span className='imgContainer'>
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

          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email-input'
            name='email-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='asterawoke@gmail.com'
            autoComplete='on'
            required
          />
            
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='pwd-input'
            name='pwd-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Create a Strong Password'
            autoComplete='on'
            required
          />
            
          <div className='buttonContainer'>
            <button type='submit' onClick={handleSignup}>Sign Up</button>
          </div>

          <div className='prompt'> 
          <p style={{ color: '#fff' }}>Already have an account? <span><LinkRouter style={{ textDecoration: 'none', color: '#006400', fontWeight: 'bold', marginLeft: '0.2rem' }} to='/'>Log In</LinkRouter></span></p>
          </div> 
        </form>
      </div>
    </div>
  </div>
  );
};

export default Signup;