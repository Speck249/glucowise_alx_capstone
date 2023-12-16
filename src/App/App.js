// App.js is at the highest-level of component hierarchy responsible for rendering,
// organizing, managing component relationships and setting up routing mechanisms.
// It defines the overall structure and behavior of the React application.  

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroPage from '../Pages/hero.js';
import ResourcePage from '../Pages/resource.js';
import SupportPage from '../Pages/support.js';
import LoginPage from '../Pages/login.js';
import SignupPage from '../Pages/signup.js';
import ProtectedRoute from '../Components/Authentication/ProtectedRoute.js';
import DashboardPage from '../Pages/dashboard.js';
import { UserAuthContextProvider } from '../Context/userAuthContext.js';
import './App.css';

function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<HeroPage />} />
          <Route path='/resource' element={<ResourcePage />} /> 
          <Route path='/support' element={<SupportPage />} /> 
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
           <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;