import React from 'react'
import { Link } from 'react-router-dom'; 
import '../App.css';
import {catfoodbrands} from '../Data/Catfoods'
function catfoodbrand() {
  return (
    <div>
      
      <div className='dogfoodbrands'>
            {catfoodbrands.map((e) => (
                <div className='foodbrand' key={e.id}>
                    <Link to={`/foodbrands/${e.id}`}>
                        <img className='image-animate1' src={e.image} alt={e.name} />
                        
                        <p className='foodname'>Name: {e.name}</p>
                        <p className='price'>Price: {e.price}</p>
                    </Link>
                    <button className='add-to-cart-btn'>Add to Cart</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default catfoodbrand;
