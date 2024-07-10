import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';

const OtpVerification = ({ email, onVerify }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (otp) => {
    setOtp(otp);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === '123456') {
      onVerify(true);
      navigate('/login');
    } else {
      onVerify(false);
      setError('Incorrect OTP. Please try again.');
    }
  };

  return (
    <div className="otp-verification" style={{ maxWidth: '400px', margin: '50px auto', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
      <h2 className="text-center mb-4" style={{ color: '#f44336' }}>Verify your account</h2>
      <p className="text-center mb-4" style={{ color: '#6c757d' }}>We have sent an OTP to your email: <strong>{email}</strong></p>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
          <OtpInput
            value={otp}
            onChange={handleChange}
            renderInput={(props) => <input {...props} />}
            numInputs={6}
            separator={<span>-</span>}
            inputStyle={{
              width: '3rem',
              height: '3rem',
              margin: '0 0.5rem',
              fontSize: '1.5rem',
              borderRadius: 4,
              border: '1px solid rgba(0,0,0,0.3)',
            }}
            containerStyle={{ justifyContent: 'center' }}
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary w-100" 
          style={{ 
            transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
            borderRadius: '5px',
            marginTop: '10px',
            padding: '10px 0',
            fontWeight: 'bold',
          }}
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OtpVerification;
