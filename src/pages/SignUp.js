import React, { useState } from 'react';
import './SignUp.css';
import Footer from '../components/Footer';
import phone from '../assets/phone-pic.png';
import OtpVerification from './OtpVerification';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [showOtpScreen, setShowOtpScreen] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOtpScreen(true);
  };

  const handleOtpVerify = (success) => {
    if (success) {
      setMessage('Signup successful!');
      setShowOtpScreen(false);
    } else {
      setMessage('OTP verification failed. Please try again.');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {showOtpScreen ? (
          <OtpVerification email={formData.email} onVerify={handleOtpVerify} />
        ) : (
          <>
            <div className="signup-image">
              <img src={phone} alt="phone-pic" />
            </div>
            <div className="signup-form-container">
              <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Create an account</h2>
                <p>Enter your details below</p>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="name" placeholder="Name" onChange={handleChange} />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleChange} />
                  <label htmlFor="email">Email or Phone Number</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange} />
                  <label htmlFor="password">Password</label>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Create Account</button>
                <button type="button" className="btn btn-secondary mb-3">Sign up with Google</button>
                {message && <div className="alert alert-info">{message}</div>}
                <div className="login-link">
                  Already have an account? <a href="/login">Log in</a>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
