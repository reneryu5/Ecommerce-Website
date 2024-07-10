import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaTruck, FaHeart, FaStar, FaRegStar } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductDetail.css';
import Footer from '../components/Footer';
import { CartContext } from '../components/CartContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <FaStar key={i} className="star" /> : <FaRegStar key={i} className="star" />);
    }
    return stars;
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-detail container mt-4">
      <div className="breadcrumbs">
        <span>{product.title}</span>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="product-detail-images">
            <img src={product.thumbnail} alt={product.title} className="img-fluid product-detail-image-main" />
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="product-detail-title">{product.title}</h1>
          <div className="product-detail-rating">
            {renderStars(product.rating)}
            <span className="reviews">({product.reviews ? product.reviews.length : 0} Reviews)</span>
          </div>
          <div className="product-detail-stock">In Stock</div>
          <div className="product-detail-price">${product.price}</div>
          <p className="product-detail-description">{product.description}</p>
          <div className="product-detail-colors mb-3">
            <span>Colours: </span>
            {product.colors && product.colors.map((color, index) => (
              <div key={index} className={`color-swatch bg-${color.toLowerCase()}`}></div>
            ))}
          </div>
          <div className="product-detail-sizes mb-3">
            <span>Size: </span>
            {product.sizes && product.sizes.map(size => (
              <button key={size} className="btn btn-outline-secondary size-button">{size}</button>
            ))}
          </div>
          <div className="product-detail-actions mb-3">
            <div className="d-flex align-items-center">
              <div className="product-detail-quantity d-flex align-items-center mr-3">
                <button className="btn btn-outline-secondary quantity-button">-</button>
                <span className="mx-2">2</span>
                <button className="btn btn-outline-secondary quantity-button">+</button>
              </div>
              <button className="btn btn-primary buy-now-button mr-2" onClick={handleBuyNow}>Buy Now</button>
              <button className="btn btn-outline-secondary wishlist-button"><FaHeart /></button>
            </div>
          </div>
          <div className="delivery-info">
            <div className="delivery-item d-flex align-items-center">
              <FaTruck className="delivery-icon mr-2" />
              <div>
                <span>Free Delivery</span>
              </div>
            </div>
            <div className="delivery-item d-flex align-items-center mt-2">
              <div>
                <span>Free 30 Days Delivery Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-reviews mt-5">
        <h3 style={{ color: '#f44336' }}>Customer Reviews</h3>
        <div className="list-group">
          {product.reviews && product.reviews.map((review, index) => (
            <div key={index} className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{review.reviewerName}</h5>
                <small>{review.date}</small>
              </div>
              <div className="mb-2">{renderStars(review.rating)}</div>
              <p className="mb-1">{review.comment}</p>
              <small>{review.reviewerEmail}</small>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
