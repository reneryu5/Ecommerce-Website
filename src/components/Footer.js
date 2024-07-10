import React from 'react';
import './Footer.css'; 
import Appstore from '../assets/app-store-badge.png';
import Playstore from '../assets/google-play.png';

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5>Exclusive</h5>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Enter your email" />
              <div className="input-group-append">
                <button className="btn btn-light btn-square" type="button">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Support</h5>
            <address>
              111 Bijoy sarani, Dhaka,<br />
              DH 1515, Bangladesh.<br />
              <a href="mailto:exclusive@gmail.com" className="text-light">exclusive@gmail.com</a><br />
              +88015-88888-9999
            </address>
          </div>
          <div className="col-md-2 mb-4">
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">My Account</a></li>
              <li><a href="#" className="text-light">Login / Register</a></li>
              <li><a href="#" className="text-light">Cart</a></li>
              <li><a href="#" className="text-light">Wishlist</a></li>
              <li><a href="#" className="text-light">Shop</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4">
            <h5>Quick Link</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Privacy Policy</a></li>
              <li><a href="#" className="text-light">Terms Of Use</a></li>
              <li><a href="#" className="text-light">FAQ</a></li>
              <li><a href="#" className="text-light">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4">
            <h5>Download App</h5>
            <p>Save $3 with App New User Only</p>
            <div>
              <a href="#">
                <img src={Playstore} alt="Google Play" style={{ width: '100px', marginBottom: '10px' }} />
              </a>
              <a href="#">
                <img src={Appstore} alt="App Store" style={{ width: '100px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
