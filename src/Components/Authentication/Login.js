import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../Context/userAuthContext';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link as LinkRouter } from 'react-router-dom';
import Google from '../../Images/GoogleIcon.png';
import './Login.css';


const LogIn = () => {
// Firebase authentication configuration for user Login.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
 // Redirect user to home page once successfully logged in.
 // Terminate login attempt with error message.
    try {
      await logIn(email, password);
      navigate('/home');
    } catch (error) {
      setError('Incorrect Email or Password');
      console.log(error);
    }
  };

// Clear out email and password field in the event that user
// user logs in or fails to login.
  useEffect(() => {
    const clearFields = setTimeout(() => {
      setEmail('');
      setPassword('');
      setError('');
    }, 5000);

    return () => {
      clearTimeout(clearFields);
    };
  }, [email, password, error]);

// Handle alternative Google login option, which then redirects
// user to Home page once logged in or terminate attempt with an
// error message.
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/home');
    } catch (error) {
      console.log(error.message);
    }
  };

  // Return component output to Home page for rendering.
  return (
    <div className='pageContainer'>
      <div className='loginformWrap'>
        <div className='loginformContent'>
          <form className='loginform' onSubmit={handleLogin}> 
            <Stack spacing={1}>
              {error && <Alert severity='error'>{error}</Alert>}
            </Stack>
            <h1 style={{marginTop: '0.5rem'}} >Welcome</h1>
            <button className='logingoogleContainer' onClick={handleGoogleSignIn}><span className='loginimgContainer'>
              <img 
                src={Google}
                width={25}
                height={25}
                alt='Google Icon'/></span> 
              Log In with Google
            </button>
            
            <div className='loginLineBreak'>
              <div className='logindivider'></div>
              <div className='loginContent'>or</div>
            </div>

            <label htmlFor='email' id='email-label'>Email</label>
            <input
              type='email'
              id='userEmail'
              name='userEmail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='asterawoke@gmail.com'
              autoComplete='on'
              autoFocus
              required
            />
            
            <label htmlFor='password' id='password-label'>Password</label>
              <input
                type='password'
                id='userPassword'
                name='userPassword'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Create a strong password'
                autoComplete='on'
                required
            />

            <div className='loginbtnContainer'>
              <button type='submit' onClick={handleLogin}>Log In</button>
            </div>

            <div className='loginprompt'> 
              <p>New to GlucoWise? <span><LinkRouter style={{ textDecoration: 'none' }} to='/signup'>Register</LinkRouter></span></p>
            </div> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;