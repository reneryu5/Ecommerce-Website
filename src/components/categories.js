import React from 'react';
import './categories.css';

const categories = [
  { name: 'Phones', icon: 'fas fa-mobile-alt' },
  { name: 'Computers', icon: 'fas fa-laptop' },
  { name: 'Camera', icon: 'fas fa-camera' },
  { name: 'HeadPhones', icon: 'fas fa-headphones' },
  { name: 'Gaming', icon: 'fas fa-gamepad' },
];

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="categories-header">
      <div className="categories-cat">
          <span className="categories-indicator"></span>
          <span className="categories-text">Categories</span>
        </div>
    
      </div>
      <div className="arrows">
        <button className="arrow-button"><i className="fas fa-chevron-left"></i></button>
        <button className="arrow-button"><i className="fas fa-chevron-right"></i></button>
      </div>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-item ${category.active ? 'active' : ''}`}
          >
            <span className={`category-icon ${category.icon}`}></span>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
