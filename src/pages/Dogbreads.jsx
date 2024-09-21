import React from 'react';
import { breads } from '../Data/Breads';
import { Link } from 'react-router-dom';

function Dogbreads() {
  return (
  
    <div className='bread1'>
  
        {
            breads.map((e)=>{
                return(
                  
                    <div className='breed2'>

                    <Link to={`/breads/${e.id}`}> </Link>
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
   
   

export default Dogbreads;
