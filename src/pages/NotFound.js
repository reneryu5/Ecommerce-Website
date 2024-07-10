import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ color: 'black', fontSize: '72px', fontWeight: 'bold' }}>404 Not Found</h1>
      <p style={{ color: '#6c757d', margin: '20px 0' }}>
        Your visited page not found. You may go to the home page.
      </p>
      <Link to="/" style={{
        backgroundColor: '#f44336',
        color: '#fff',
        padding: '10px 20px',
        textDecoration: 'none',
        borderRadius: '5px'
      }}>
        Back to home page
      </Link>
    </div>
  );
};

export default NotFound;
