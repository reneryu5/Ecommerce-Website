import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import AllProducts from './pages/AllProducts';
import Profile from './components/Profile';
import Cart from './pages/Cart';
import { CartProvider } from './components/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import Checkout from './pages/Checkout';
import OrderPlaced from './pages/OrderPlaced';
import PaymentForm from './pages/CardDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <CartProvider>
      <Router>
        <NavigationBar />
        <ToastContainer />
        <Routes>
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/all-products" element={<AllProducts />} />
          
          <Route
            path="/cart"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/profile" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/profile" element={isLoggedIn ? <Profile setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-placed" element={<OrderPlaced />} />
          <Route path="/carddetails" element={<PaymentForm />} />
        
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
