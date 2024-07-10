/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './bestsellingproducts.css';

const BestSellingProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // useNavigate hook

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        const productsData = response.data.products.slice(0, 4).map(product => ({
          ...product,
          rating: getRandomNumber(1, 5),
          reviews: getRandomNumber(10, 100),
        }));
        setProducts(productsData);
        localStorage.setItem('product', JSON.stringify(productsData));
      })
      .catch(error => {
        setError(error.message);
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>);
      }
    }
    return stars;
  };

  const handleViewAllClick = () => {
    navigate('/all-products'); // Use navigate from useNavigate hook
  };
  
  return (
    <section className="bestselling-section">
      <div className="bestselling-header">
        <div className="indicator"></div>
        <div className="text">This month</div>
      </div>
      <h3 className="smaller-heading">Best Selling Products</h3>
      <div className="products-container">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-item">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <div className="product-title text-dark">{product.title}</div>
            <div className="product-rating">
              {renderStars(product.rating)}
              <span className="reviews">({product.reviews} reviews)</span>
            </div>
            <div className="product-price">${product.price}</div>
          </Link>
        ))}
      </div>
      <button className="view-all-button" onClick={handleViewAllClick}>View All</button>
    </section>
  );
};

export default BestSellingProducts;
