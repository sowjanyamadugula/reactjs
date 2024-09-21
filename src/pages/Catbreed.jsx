import React from 'react'
import { catbreeds} from '../Data/Breads';
import { Link } from 'react-router-dom';
import { catbreeds } from '../Data/Catbreedsdata';

function Catbreed() {
    return (
    
      <div className='catbread1'>
    
          {
              catbreeds.map((e)=>{
                  return(
                    
                      <div className='catbreed2'>
  
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

export default Catbreed
