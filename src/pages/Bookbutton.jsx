// BookButton.js
import React from 'react';
import '../App.css'; // Import the CSS file for styling


 const BookButton = ({ text }) => {
  return (
    <button className="book-button">
      {text}
    </button>
  );
};

export default BookButton;
