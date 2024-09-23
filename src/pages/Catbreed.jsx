import React from 'react'

import { Link } from 'react-router-dom';
import { catbreeds } from '../Data/Catbreedsdata';
import '../App.css';

function Catbreed() {
    return (
     <div className='bread1'>
          {
              catbreeds.map((e)=>{
                  return(                  
                      <div className='breed2'>
    <Link to={`/catbreeds/cat/${e.id}`}>
                     <img src={e.image} alt="" />
                           <p>Brand Name:{e.name}</p>
                          <p>Price : {e.price}</p> 
                          <button className="add-to-cart2">Add to Cart</button>
                          </Link>
                      </div>   
                  )   
              })
          }
      </div>
    )
  }

export default Catbreed;
