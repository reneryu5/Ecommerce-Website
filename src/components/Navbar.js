import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import { CartContext } from './CartContext';
import './nav.css';

const NavigationBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  useEffect(() => {
    if (searchInput) {
      const filtered = products.filter(product =>
        product.tags.some(tag => tag.toLowerCase().includes(searchInput.toLowerCase()))
      );
      setFilteredProducts(filtered);
      setShowDropdown(true);
    } else {
      setFilteredProducts([]);
      setShowDropdown(false);
    }
  }, [searchInput, products]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Exclusive</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          </Nav>
          <Form className="d-flex position-relative" onSubmit={handleSearchSubmit}>
            <FormControl
              type="search"
              placeholder="Looking for?"
              className="me-2"
              aria-label="Search"
              value={searchInput}
              onChange={handleSearchChange}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              onFocus={() => searchInput && setShowDropdown(true)}
            />
            <Button variant="btn btn-dark" type="submit">Search</Button>
            {showDropdown && (
              <Dropdown.Menu show className="w-100">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <Dropdown.Item key={product.id} as={Link} to={`/product/${product.id}`}>
                      {product.title}
                    </Dropdown.Item>
                  ))
                ) : (
                  <Dropdown.Item>No results found</Dropdown.Item>
                )}
              </Dropdown.Menu>
            )}
          </Form>
          <Nav>
            <Nav.Link href="#"><FaHeart /></Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart />
              {cartItems.length > 0 && (
                <span className="cart-item-count">{cartItems.length}</span>
              )}
            </Nav.Link>
            <Nav.Link onClick={handleProfileClick}><FaUser /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
