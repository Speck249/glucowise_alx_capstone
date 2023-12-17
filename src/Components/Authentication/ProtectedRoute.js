import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from '../../Context/userAuthContext';


const ProtectedRoute = ({ children }) => {
// Manage user access to dashboard upon successful authentication
  const { user } = useUserAuth();
  console.log("Check user in Private: ", user);

  if (!user) {
    return <Navigate to='/hero' />;
  }
  return children;
};

export default ProtectedRoute;
