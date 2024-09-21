import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';
import { foodbrands } from '../Data/Dogfoodbrades';

function Dogbradesfood() {
    return (
        <div className='dogfoodbrands'>
            {foodbrands.map((e) => (
                <div className='foodbrands' key={e.id}>
                    <Link to={`/foodbrands/${e.id}`}>
                        <img className='image-animate1' src={e.image} alt={e.name} />
                        
                        <p className='foodname'>Name: {e.name}</p>
                        <p className='price'>Price: {e.price}</p>
                    </Link>
                    <button className='add-to-cart-btn'>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default Dogbradesfood;
