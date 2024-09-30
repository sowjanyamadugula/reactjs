import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { catbreeds } from '../Data/Catbreedsdata';
import '../App.css';
import { CartContext } from '../Single/CartContext';  

function Catbreed() {
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
            <Link to='/cart'>
              <p className='i3'>Add to Cart</p>
            </Link>
          </div>

          <div className='col-sm-2 itemicons'>
            <Link to='/petservices'>
              <p className='i3'>Pets Services</p>
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
        {catbreeds.map((cat) => (
          <div className='breed2' key={cat.id}>
            <Link to={`/details/cat/${cat.id}`}>
              <img src={cat.image} alt={cat.name} />
              <p>Brand Name: {cat.name}</p>
              <p>Price : {cat.price}</p>
            </Link>
            <button
                            className="add-to-cart2"
                            onClick={() => addToCart(cat)} 
                          >
                            Add to Cart
                          </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Catbreed;
