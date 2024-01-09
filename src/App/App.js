// App.js is at the highest-level of component hierarchy responsible for rendering,
// organizing, managing component relationships and setting up routing mechanisms.
// It defines the overall structure and behavior of the React application.  

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from '../Context/userAuthContext.js';
import HomePage from '../Pages/home.js';
import DashboardPage from '../Pages/dashboard.js';
import SupportPage from '../Pages/support.js';
import ResourcePage from '../Pages/resource.js';
import ArticlePage from '../Pages/article.js';
import SignupPage from '../Pages/signup.js';
import LoginPage from '../Pages/login.js';
import ProtectedRoute from '../Components/Authentication/ProtectedRoute.js';
import CustomError from '../Pages/custom404.js';
import './App.css';



const App = () => {
  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='/resource' element={<ResourcePage />} />
          <Route path='/article' element={<ArticlePage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/dashboard' element={<DashboardPage/>} />
          <Route path='/custom404' element={<CustomError />} />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;