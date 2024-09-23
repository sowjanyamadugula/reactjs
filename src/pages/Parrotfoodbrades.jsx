// src/pages/Parrotfoodbrades.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';
import { parrotfoodbrand } from '../Data/Parratfood';

function Parrotfoodbrades() {
  return (
    <div>
      <div className='dogfoodbrands'>
        {parrotfoodbrand.map((e) => (
          <div className='foodbrand' key={e.id}>
            <Link to={`/parrotfoodbrand/parrotfood/${e.id}`}>
              <img className='image-animate1' src={e.image} alt={e.name} />
            
              <p className='foodname'>Name: {e.name}</p>
              <p className='price'>Price: {e.price}</p>
            </Link>
            <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parrotfoodbrades;
