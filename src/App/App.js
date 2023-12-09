// App.js is at the highest-level of component hierarchy responsible for rendering,
// organizing, managing component relationships and setting up routing mechanisms.
// It defines the overall structure and behavior of the React application.  

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroPage from '../Pages/hero.js';
import SupportPage from '../Pages/support.js';
import DashboardPage from '../Pages/dashboard.js';
import LoginPage from '../Pages/login.js';
import SignupPage from '../Pages/signup.js';
import './App.css';

const App = () => {
    return (
        <Router>
          <Routes>
            <Route path='/' element={<HeroPage />} />
            <Route path='/support' element={<SupportPage />} /> 
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
          </Routes>
        </Router>
    )
}

export default App;