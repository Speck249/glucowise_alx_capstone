import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import avatar from '../../Images/Person01.jpg';
import './Dashboard.css';


const Dashboard = () => {
  return (
    <>
      <nav className='tabContainer'>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src={avatar}/>
        </Stack>

        <hr />
          
        <nav className='tabMenu'>
          <div className='tabItems'>
            <LinkRouter to='/track'>Track</LinkRouter>
          </div>

          <div className='tabItems'>  
            <LinkRouter to='/readings'>Readings</LinkRouter>
          </div>
          
          <div className='tabItems'>
            <LinkRouter to='/my_account'>My Account</LinkRouter>
          </div>
           
          <div className='tabButton'>
            <LinkRouter to='/hero'>Logout</LinkRouter>
          </div>
        </nav>
      </nav>
    </>
  );
};

export default Dashboard;