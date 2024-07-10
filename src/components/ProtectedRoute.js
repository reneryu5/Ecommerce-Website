import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  useEffect(() => {
    if (!isLoggedIn) {
      toast.error('You need to log in to access the cart');
    }
  }, [isLoggedIn]);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
