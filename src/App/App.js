// App.js is at the highest-level of component hierarchy responsible for rendering,
// organizing, managing component relationships and setting up routing mechanisms.
// It defines the overall structure and behavior of the React application.  

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroPage from '../Pages/hero';
import DashboardPage from '../Pages/dashboard';
import SupportPage from '../Pages/support';
import LoginPage from '../Pages/login';
import SignupPage from '../Pages/signup';
import './App.css';

const App = () => {
    return (
        <Router>
          <Routes>
            <Route path='/' element={<HeroPage />} /> 
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/support' element={<SupportPage />} />
          </Routes>
        </Router>
    )
}

export default App;