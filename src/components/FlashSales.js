import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './flash.css';

const FlashSales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   

    fetchProducts();
  }, []);

  const fetchProducts = async () => { 
    await axios.get('https://fakestoreapi.com/products')
    .then(response => {
      setProducts(response.data);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
    
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flash-sales-container">
      <div className="flash-sales-header">
        <div className="flash-sales-today">
          <span className="today-indicator"></span>
          <span className="today-text">Today's</span>
        </div>
        <div className="timer">
          <span>Days <span className="time">03</span> :</span>
          <span>Hours <span className="time">23</span> :</span>
          <span>Minutes <span className="time">19</span> :</span>
          <span>Seconds <span className="time">56</span></span>
        </div>
      </div>
      <h2>Flash Sales</h2>
      <div className="flash-sales-scroller">
        <div className="scroller-inner">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-secondary">-30%</p>
                <p className="card-text text-secondary">
                  <span className="price">${(product.price * 0.7).toFixed(2)}</span>
                  <span className="original-price">${product.price.toFixed(2)}</span>
                </p>
                <p className="card-text text-secondary">Rating: {Math.floor(Math.random() * 100)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="view-all-products-btn">View All</button>
    </div>
  );
};

export default FlashSales;
