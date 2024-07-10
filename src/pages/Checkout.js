import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';
import { useNavigate } from 'react-router-dom'; 

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const [formData, setFormData] = useState({
      firstName: '',
      companyName: '',
      streetAddress: '',
      apartment: '',
      city: '',
      phoneNumber: '',
      email: '',
    });
    const [paymentMethod, setPaymentMethod] = useState('cod');

    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handlePaymentChange = (e) => {
      setPaymentMethod(e.target.value);
    };

    const calculateSubtotal = () => {
      return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (paymentMethod === 'card') {
        navigate('/carddetails');
      } else {
        navigate('/order-placed');
      }
    };
  
    const handleCancel = () => {
      navigate('/cart');
    };
  
    return (
      <section className="container py-4" style={{ minHeight: '80vh', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <form onSubmit={handleSubmit} style={{ width: '48%' }}>
          <h3 className="mb-4" style={{ color: '#f44336' }}>Billing Details</h3>
          <div className="form-group">
            <label>First Name<span>*</span></label>
            <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" className="form-control" name="companyName" value={formData.companyName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Street Address<span>*</span></label>
            <input type="text" className="form-control" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Apartment, floor, etc. (optional)</label>
            <input type="text" className="form-control" name="apartment" value={formData.apartment} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Town/City<span>*</span></label>
            <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone Number<span>*</span></label>
            <input type="text" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email Address<span>*</span></label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-check mb-4">
            <input type="checkbox" className="form-check-input" id="saveInfo" />
            <label className="form-check-label" htmlFor="saveInfo">Save this information for faster check-out next time</label>
          </div>
          <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#f44336', border: 'none', padding: '0.5rem 1rem' }}>Place Order</button>
          <button type="button" className="btn btn-secondary mt-2" onClick={handleCancel}>Cancel</button>
        </form>
        <div style={{ width: '48%' }}>
          <h3 className="mb-4 text-center" style={{ color: '#f44336' }}>Your Order</h3>
          <ul className="list-group mb-4">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={item.thumbnail} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }} />
                  {item.title}
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal:</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="d-flex justify-content-between font-weight-bold">
            <span>Total:</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <div className="mt-4">
            <h5 className="mb-3">Payment Method</h5>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="paymentMethod" id="card" value="card" onChange={handlePaymentChange} />
              <label className="form-check-label" htmlFor="card">
                Card
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="paymentMethod" id="cod" value="cod" defaultChecked onChange={handlePaymentChange} />
              <label className="form-check-label" htmlFor="cod">
                Cash on delivery
              </label>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Checkout;
