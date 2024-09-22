import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import { parrotbreeds } from '../Data/Parraotdata';

function parrotbreed() {
    return (
    
      <div className='bread1'>
    
          {
              parrotbreeds.map((e)=>{
                  return(
                    
                      <div className='breed2'>
  
                      <Link to={`/parrotbreads/${e.id}`}> </Link>
                     <img src={e.image} alt="" />
                          
                          <p>Brand Name:{e.name}</p>
                          <p>Price : {e.price}</p>
                          <button className="add-to-cart2">Add to Cart</button>
                     
                      </div>
                      
                  )
                  
              })
          }
      </div>
    )
  }

export default parrotbreed