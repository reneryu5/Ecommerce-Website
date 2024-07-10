import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../components/CartContext';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    position: 'relative'
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
  };

  const buttonStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    display: 'none',
    cursor: 'pointer'
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <section className="container py-4">
      <h3 className="mb-4 text-center" style={{ color: '#f44336' }}>All Products</h3>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map(product => (
            <div key={product.id} className="col">
              <div
                className="card h-100 text-decoration-none"
                style={cardStyle}
                onMouseEnter={e => {
                  Object.assign(e.currentTarget.style, cardHoverStyle);
                  e.currentTarget.querySelector('.add-to-cart').style.display = 'block';
                }}
                onMouseLeave={e => {
                  Object.assign(e.currentTarget.style, cardStyle);
                  e.currentTarget.querySelector('.add-to-cart').style.display = 'none';
                }}
              >
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    className="card-img-top"
                    alt={product.title}
                    style={{
                      height: '200px',
                      objectFit: 'cover',
                      borderTopLeftRadius: '8px',
                      borderTopRightRadius: '8px'
                    }}
                  />
                </Link>
                <div className="card-body" style={{ backgroundColor: '#f8f9fa' }}>
                  <h5 className="card-title text-dark" style={{ fontWeight: 'bold' }}>{product.title}</h5>
                  <p className="card-text text-dark" style={{ fontSize: '1.1rem', marginBottom: '0' }}>${product.price}</p>
                </div>
                <button 
                  className="add-to-cart" 
                  style={buttonStyle}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {error && (
        <div className="alert alert-danger mt-4" role="alert">
          {error} <button onClick={() => window.location.reload()} className="btn btn-link">Retry</button>
        </div>
      )}
    </section>
  );
};

export default AllProducts;
