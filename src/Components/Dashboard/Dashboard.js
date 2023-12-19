import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../Context/userAuthContext';
import { Link as LinkScroll } from 'react-scroll';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { FaMobile, FaInfoCircle, FaFire, FaTimes } from 'react-icons/fa';
//import { LineChart } from '@mui/x-charts/LineChart';
//import { Chart, LineSeries, ArgumentAxis, ValueAxis } from '@devexpress/dx-react-chart-material-ui';
//import { ArgumentScale, ValueScale } from '@devexpress/dx-react-chart';


/* const ChartContent = () => {
  const hba1cData = [
  { month: 'Jan', value: 6.5 },
  { month: 'Feb', value: 6.3 },
  { month: 'Mar', value: 6.2 },
  { month: 'Apr', value: 6.4 },
  { month: 'May', value: 6.1 },
  { month: 'Jun', value: 6.2 },
];

  const colors = {
    Jan: 'blue',
    Feb: 'yellow',
    Mar: 'pink',
    Apr: 'orange',
    May: 'purple',
    Jun: 'brown',
  };

  const stackStrategy = {
    stack: 'total',
    area: true,
    stackOffset: 'none',
  }

  const customize = {
    height: 300,
    legend: { hidden: true },
    margin: { top: 5 },
    stackingOrder: 'descending',
  };

  return (
    <LineChart
      xAxis={[
      {
        dataKey: 'month',
        valueFormatter: (v) => v.toString(),
      },
    ]}

    series={Object.keys(keyToLabel).map((key) => ({
      dataKey: key,
      label: keyToLabel[key],
      color: colors[key],
      showMark: false,
      ...stackStrategy,
    }))}
    dataset={hba1cData}
    {...customize}
    />
  );
}

*/

const Dashboard = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      setError('Error Logging Out.');
      console.log(error);
    }
  };

  return (
    <>
      <div className='dashContainer' style={{ display: 'flex' }}>
        <Sidebar>
          <Menu style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'bisque',
            position: 'fixed',
            top: 0,
            bottom: 0,
            width: '20%',
            height: '100%'
          }}>
            <MenuItem style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginTop: '3rem' }}> GlucoWise </MenuItem>
              <hr style={{ width: '75%', margin: '0 auto'}}/>
            <MenuItem style={{ marginTop: '1rem', fontSize: '0.85rem'}}><HomeIcon fontSize='small' /> <LinkScroll to='/dashboard'> Home </LinkScroll> </MenuItem>
            <MenuItem style={{ fontSize: '0.85rem' }}><FaMobile size={18}/><LinkScroll> Connect to Device </LinkScroll></MenuItem>
            <MenuItem style={{ fontSize: '0.85rem' }}><DashboardIcon fontSize='small' /> <LinkScroll to='/support'> Patient Dashboard </LinkScroll></MenuItem>
            <MenuItem style={{ fontSize: '0.85rem' }}><SettingsIcon fontSize='small' /><LinkScroll to='/resource'> Settings </LinkScroll></MenuItem>   
            <div className='notificationCard' 
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '250px',
                height: '200px',
                padding: '2rem 1.2rem',
                margin: '1rem 1rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: '2rem',
                backgroundColor: '#000'
            }}>
            <h2 style={{ color: '#fff', fontSize: '1.1rem', textAlign: 'center', marginBottom: '1rem' }}> Upgrade to Pro <FaFire size={18} color='red' /> </h2>
            <p style={{ color: '#fff', fontSize: '0.8rem', textAlign: 'justify', marginBottom: '1rem'}}> Sed ut perspiciatis unde omnis iste natus error sit voluptatem </p>
            <button style={{ color: '#fff', border: 'none', borderRadius: '4rem', padding: '0.5rem', cursor: 'pointer', margin: '0 auto' }}> Upgrade </button>
          </div>
          <MenuItem style={{ fontSize: '0.85rem' }}><FaInfoCircle size={18} style={{ textAlign: 'center'}}/> <LinkScroll to='/support'> Help Center </LinkScroll></MenuItem>
          <MenuItem style={{ fontSize: '0.85rem' }}>
            <Stack>
              {error && <Alert variant="danger">{error}</Alert>}
            </Stack>
            <LogoutIcon /> <LinkScroll to='/' onClick={handleLogout}> Logout </LinkScroll></MenuItem>
          </Menu>
        </Sidebar>
      </div>
      
      {/* 
      <div className='dashCharts' style={{ marginLeft: '25%'}}>
        <ChartContent />
      </div> */}
    </>
  ); 
}

export default Dashboard;