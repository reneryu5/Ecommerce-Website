import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../components/CartContext';

const OrderPlaced = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { clearCart } = useContext(CartContext);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            clearCart();
        }, 3000); 
    }, [clearCart]);

    const handleHome = () => {
        navigate('/');
    };

    const spinnerStyle = {
        width: '4rem',
        height: '4rem',
        borderWidth: '0.5rem',
        color: '#f44336'
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', flexDirection: 'column' }}>
            {loading ? (
                <div style={{ textAlign: 'center' }}>
                    <div className="spinner-border" role="status" style={spinnerStyle}>
                        <span className="sr-only">Loading...</span>
                    </div>
                    <p style={{ marginTop: '1rem', color: '#f44336' }}>Processing your order...</p>
                </div>
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ color: '#f44336' }}>Order Placed Successfully!</h3>
                    <button className="btn btn-primary mt-3" style={{ backgroundColor: '#f44336', border: 'none', padding: '0.5rem 1rem' }} onClick={handleHome}>
                        Go to Home
                    </button>
                </div>
            )}
        </div>
    );
};

export default OrderPlaced;
