import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';


const Dashboard = () => {
  return (
      <div id='sidebar' style={({ height: '100vh' }, { display: 'flex' })}>
        <Sidebar style={({ height: '100vh' }, { backgroundColor: '#004d24' })}>
          <Menu>
            <MenuItem> <LinkRouter to='/'> Home </LinkRouter></MenuItem>
            <MenuItem> <LinkScroll to='About'> About GlucoWise </LinkScroll></MenuItem>
            <MenuItem> <LinkScroll to='Usage'> How It Works </LinkScroll></MenuItem>
            <MenuItem> <LinkScroll to='Insurance'> Cost & Coverage </LinkScroll></MenuItem>
            <MenuItem> <LinkRouter to='/dashboard'> Dashboard </LinkRouter></MenuItem>
            <MenuItem> <LinkRouter to='/support'> Support </LinkRouter></MenuItem>
            <MenuItem> <LinkRouter to='/resource'> Resource </LinkRouter></MenuItem>
          </Menu>
        </Sidebar>
      </div>
  ); 
}

export default Dashboard;