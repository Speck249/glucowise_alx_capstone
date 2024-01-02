import React, { useState } from 'react';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../Context/userAuthContext';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FaMobile, FaInfoCircle, FaFire, FaArrowAltCircleDown, FaHome } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import Ngozi from '../../Images/Ngozi.jpg';


const GlucoseLineChart = () => {
  // Dummy data for three months of glucose and carbohydrate levels
  const glucoseLevel = [
    { month: 'Sep', glucoseLevel: 100, carbohydrateLevel: 50 },
    { month: 'Oct', glucoseLevel: 110, carbohydrateLevel: 60 },
    { month: 'Nov', glucoseLevel: 105, carbohydrateLevel: 55 },
  ];

  const fastingGlucoseLevel = '81'; // Today's fasting glucose level
  const now = new Date();
  const day = now.toDateString();
  const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

return (
  <div style={{ backgroundColor: '#000', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: '70%', margin: '3rem', padding: '3rem', borderRadius: '2rem', boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.2)' }}>
      <h2 style={{ fontSize: '2.5rem', color: 'burlywood', textAlign: 'left', marginLeft: '3rem', marginBottom: '1.8rem' }}>{day} <br />
      <span style={{ backgroundColor: '#602E17', padding: '0.5rem', fontSize: '1.2rem' }}>Glucose Level at {currentTime} is {fastingGlucoseLevel} mg/dL</span></h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '45%', margin: '1rem' }}>
          <LineChart width={500} height={400} data={glucoseLevel} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" stroke="burlywood" />
            <YAxis stroke="burlywood" />
            <Tooltip contentStyle={{ backgroundColor: 'burlywood', border: 'none' }} />
            <Legend iconType="circle" verticalAlign="top" height={30} />
            <Line type={'monotone'} dataKey="glucoseLevel" stroke="#602E17" strokeWidth={2} activeDot={{ r: 5, stroke: 'burlywood', strokeWidth: 2, fill: '#00' }} />
          </LineChart>
        </div>
        <div style={{ width: '45%', margin: '1rem' }}>
          <BarChart width={500} height={400} data={glucoseLevel} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" stroke="bisque" />
            <YAxis stroke="bisque" />
            <Tooltip contentStyle={{ backgroundColor: '#602E17', border: 'none' }} />
            <Legend iconType="circle" verticalAlign="top" height={36} />
            <Bar dataKey="carbohydrateLevel" fill="burlywood" />
          </BarChart>
        </div>
      </div>
    </div>
  </div>
 );
}

const MySwal = withReactContent(Swal);

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

  const handleConnection = () => {
    MySwal.fire({
      title: 'Connect to Sensor Patch?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/dashboard');
      } else {
        navigate('/dashboard');
      }
    });
  }

  return (
    <>
      <div className='dashContainer' style={{ display: 'flex' }}>
        <Sidebar>
          <Menu style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'burlywood',
            position: 'fixed',
            top: 0,
            bottom: 0,
            width: '20%',
            height: '100%'
          }}>
            <div className='profileImage' style={{ width: '50%', margin: '0 auto', marginTop: '2rem' }}><img src={Ngozi} width={100} height={100} style={{ borderRadius: '4rem' }} alt='Pretty Woman'/></div>
            <MenuItem style={{ fontSize: '0.85rem' }}><FaHome size={20} /> <LinkRouter to='/home' style={{ textDecoration: 'none', color: '#000' }}> Home </LinkRouter> </MenuItem>
            <MenuItem style={{ fontSize: '0.85rem' }} onClick={handleConnection}><FaMobile size={18}/> Connect to Device </MenuItem>
            <MenuItem style={{ fontSize: '0.85rem' }}><FaArrowAltCircleDown size={20} /> Download Report </MenuItem>
            <MenuItem style={{ fontSize: '0.85rem' }}><SettingsIcon fontSize='small' /> Settings </MenuItem>   
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
            <h2 style={{ color: '#fff', fontSize: '1.1rem', textAlign: 'center', marginBottom: '1rem' }}> Upgrade to Pro <FaFire size={18} color='#602E17' /> </h2>
            <p style={{ color: '#fff', fontSize: '0.8rem', textAlign: 'justify', marginBottom: '1rem'}}> Sed ut perspiciatis unde omnis iste natus error sit voluptatem </p>
            <button style={{ color: '#fff', border: 'none', padding: '0.5rem', cursor: 'pointer', margin: '0 auto' }}> Upgrade </button>
          </div>
          <MenuItem style={{ fontSize: '0.85rem' }}><FaInfoCircle size={18} /> <LinkRouter to='/support' style={{ textDecoration: 'none', color: '#000' }}> Help Center </LinkRouter></MenuItem>
          <MenuItem style={{ fontSize: '0.85rem' }}>
            <Stack>{error && <Alert variant="danger">{error}</Alert>}</Stack>
            <LogoutIcon /> <LinkRouter to='/' onClick={handleLogout} style={{ textDecoration: 'none', color: '#000' }}> Logout </LinkRouter></MenuItem>
          </Menu>
        </Sidebar>
      </div>
       
      <div className='dashCharts'>
        <GlucoseLineChart />
      </div>
    </>
  ); 
}

export default Dashboard;