// App.js is at the highest-level of component hierarchy responsible for rendering,
// organizing, managing component relationships and setting up routing mechanisms.
// It defines the overall structure and behavior of the React application.  

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroPage from '../Pages/hero';
import DashboardPage from '../Pages/dashboard';
import ContactPage from '../Pages/contact';
import LogIn from '../Pages/login';
import SignUp from '../Pages/signup';
import './App.css';

const App = () => {
    return (
        <Router>
          <Routes>
            <Route path='/' element={<HeroPage />} /> 
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </Router>
    )
}

export default App;