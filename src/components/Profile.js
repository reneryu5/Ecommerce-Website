import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer'

const Profile = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Retrieve user details from local storage or wherever it's stored
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserDetails(JSON.parse(storedUser));
    } else {
      // Redirect to login page if no user details found
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/signup');
  };

  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100">
      {userDetails ? (
        <div className="card shadow p-4" style={{minHeight: '7rem' }}>
          <h1 className="text-center mb-4">Profile</h1>
          <div className="user-details mb-4">
            <div className="form-group mb-3">
              <label><strong>Email:</strong></label>
              <input type="text" className="form-control" value={userDetails.email} readOnly />
            </div>
            <div className="form-group mb-3">
              <label><strong>Password:</strong></label>
              <input type="text" className="form-control" value={userDetails.password} readOnly />
            </div>
            {/* Add more details as needed */}
          </div>
          <div className="text-center">
            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning text-center" role="alert">
          You need to login to view this page.
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default Profile;
