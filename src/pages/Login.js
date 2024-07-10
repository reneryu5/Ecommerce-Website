import React, { useState } from 'react';
import './Login.css'; 
import Footer from '../components/Footer';
import phone from '../assets/phone-pic.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    setIsLoggedIn(true);
    toast.success('Login successful!');
  };

  return (
    <div className="login-page">
      <ToastContainer />
      <div className="login-container">
        <div className="login-image">
          <img src={phone} alt="phone-pic" />
        </div>
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Log in to your account</h2>
            <p>Enter your credentials below</p>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleChange} />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange} />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">Log in</button>
            <div className="signup-link">
              Don't have an account? <a href="/signup">Sign up</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
