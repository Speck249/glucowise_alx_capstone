// App.js is at the highest-level of component hierarchy responsible for rendering,
// organizing, managing component relationships and setting up routing mechanisms.
// It defines the overall structure and behavior of the React application.  

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from '../Context/userAuthContext.js';
import HeroPage from '../Pages/hero.js';
import DashboardPage from '../Pages/dashboard.js';
import SupportPage from '../Pages/support.js';
import ResourcePage from '../Pages/resource.js';
import SignupPage from '../Pages/signup.js';
import LoginPage from '../Pages/login.js';
import ProtectedRoute from '../Components/Authentication/ProtectedRoute.js';
import './App.css';


const App = () => {
  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <DashboardPage/>
              </ProtectedRoute>
            }
          />
          <Route path='/' element={<HeroPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='/resource' element={<ResourcePage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;