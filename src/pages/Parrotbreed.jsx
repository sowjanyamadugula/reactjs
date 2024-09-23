import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import { parrotbreeds } from '../Data/Parraotdata';


function Parrotbreed() {
    return (
      <div className='bread1'>
          {
              parrotbreeds.map((e) => {
                  return (
                      <div className='breed2'>
                          <Link to={`/details/parrot/${e.id}`}>
                              <img src={e.image} alt="" />
                              <p>Brand Name: {e.name}</p>
                              <p>Price : {e.price}</p>
                              <button className="add-to-cart2">Add to Cart</button>
                          </Link>
                      </div>
                  );
              })
          }
      </div>
    );
}

export default Parrotbreed;
