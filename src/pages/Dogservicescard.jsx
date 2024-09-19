// src/pages/ServiceCard.jsx
import React from 'react';
import '../App.css'; // Import the CSS file for styling
import BookButton from './Bookbutton'; // Import the button component

const ServiceCard = ({ imgSrc, altText, title, originalPrice, discountedPrice, features, buttonText }) => {
  return (
    <div className="card">
      {/* <img src={imgSrc} alt={altText} className="icon" /> */}
      <h2 className="service-title">{title}</h2>
      <div className="service-price">
        <span className="original-price">₹{originalPrice}</span>
        <span className="discounted-price">₹{discountedPrice}</span>
      </div>
      <ul className="feature-list">
        {features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>
      <BookButton text={buttonText} />
    </div>
  );
};

export default ServiceCard; // Ensure correct export
