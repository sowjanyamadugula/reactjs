import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { parrotbreeds } from '../Data/Parraotdata';
import { CartContext } from '../Single/CartContext'; 

function Parrotbreed() {
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
        {parrotbreeds.map((parrot) => {
          return (
            <div className='breed2' key={parrot.id}>
              <Link to={`/details/parrot/${parrot.id}`}>
                <img src={parrot.image} alt={parrot.name} />
                <p>Brand Name: {parrot.name}</p>
                <p>Price: ${parrot.price}</p>
              </Link>
              <button
                className="add-to-cart2"
                onClick={(e) => {
                  e.preventDefault(); 
                  addToCart(parrot); 
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Parrotbreed;
