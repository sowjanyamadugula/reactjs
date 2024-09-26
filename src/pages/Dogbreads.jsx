import React, { useContext } from 'react';
import { breads } from '../Data/Breads'; 
import { Link } from 'react-router-dom';
import { CartContext } from '../Single/CartContext'; 

function Dogbreads() {
  const { addToCart } = useContext(CartContext); 

  return (
    <>
      <div className='containerpetservices'>
        <div className='rowicons'>
          <div className='col-sm-2 itemicons'>
            <Link to='/home'>
              <p className='i3'>Home</p>
            </Link>
          </div>
          <div className='col-sm-2 itemicons'>
            <Link to='/dashboard'>
              <p className='i3'>Dashboard</p>
            </Link>
          </div>
          <div className='col-sm-2 itemicons'>
            <Link to='/petservices'>
              <p className='i3'>Pets services</p>
            </Link>
          </div>
          <div className='col-sm-2 itemicons'>
            <Link to='/petfood'>
              <p className='i3'>Pets Foods</p>
            </Link>
          </div>
          <div className='col-sm-2 itemicons'>
            <Link to='/petmedican'>
              <p className='i3'>Pets Medican</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='bread1'>
        {breads.map((dog) => (
          <div className='breed2' key={dog.id}>
            <Link to={`/details/dog/${dog.id}`}>
              <img src={dog.image} alt={dog.name} />
              <p>Brand Name: {dog.name}</p>
              <p>Price: {dog.price}</p>
            </Link>
            <button
              className="add-to-cart2"
              onClick={(e) => {
                e.preventDefault();
                addToCart(dog); 
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dogbreads;
