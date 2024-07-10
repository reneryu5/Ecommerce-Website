import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

const Cart = () => {
  const { cartItems, updateCartItems, removeFromCart } = useContext(CartContext);
  const [updatedItems, setUpdatedItems] = useState([...cartItems]);
  const navigate = useNavigate();

  const handleQuantityChange = (index, newQuantity) => {
    const newItems = [...updatedItems];
    newItems[index].quantity = Math.max(1, newQuantity); // Ensure quantity is at least 1
    setUpdatedItems(newItems);
  };

  const handleUpdateCart = () => {
    updateCartItems(updatedItems);
    toast.success("Cart has been updated!");
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    setUpdatedItems(updatedItems.filter(item => item.id !== productId));
  };

  const handleReturnToShop = () => {
    navigate('/all-products');
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  const calculateSubtotal = () => {
    return updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <section className="container py-4" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <ToastContainer />
      <h3 className="mb-4 text-center" style={{ color: '#f44336' }}>Your Cart</h3>
      {updatedItems.length === 0 ? (
        <div className="text-center" style={{ fontSize: '1.2rem', color: '#555' }}>Your cart is empty</div>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {updatedItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                    />
                    {item.title}
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      style={{ width: '60px' }}
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    />
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-between align-items-center my-4">
            <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }} onClick={handleReturnToShop}>Return To Shop</button>
            <button
              className="btn btn-primary"
              style={{
                backgroundColor: '#f44336',
                border: 'none',
                padding: '0.5rem 1rem',
                marginLeft: '1rem',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f44336'}
              onClick={handleUpdateCart}
            >
              Update Cart
            </button>
          </div>
          <div className="card" style={{ maxWidth: '400px', marginLeft: 'auto', border: '1px solid #ddd' }}>
            <div className="card-body">
              <h5 className="card-title">Cart Total</h5>
              <p className="card-text">Subtotal: ${calculateSubtotal()}</p>
              <p className="card-text">Shipping: Free</p>
              <p className="card-text font-weight-bold">Total: ${calculateSubtotal()}</p>
              <button 
                className="btn btn-primary w-100" 
                style={{ backgroundColor: '#f44336', border: 'none', padding: '0.5rem 1rem' }}
                onClick={handleProceedToCheckout}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </>
      )}
      <Footer />
    </section>
  );
};

export default Cart;
