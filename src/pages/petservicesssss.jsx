import React from 'react'
import { catdogservices } from '../Data/serivicesdata'
import { Link } from 'react-router-dom';

function petservicesssss() {
  return (
    <div className='bread1'>
    
    {
       catdogservices.map((e)=>{
            return(
              
                <div className='breed2'>

                <Link to={`/catdogservices/${e.id}`}> </Link>
               <img src={e.image} alt="" />
                    <p>Title:{e.title}</p>
                    <p>originalPrice:{e.originalPrice}</p>
                    <p>discountedPrice{e.discountedPrice}</p>
                    <p>features:{e.features}</p>
                    
            
                    <button className="add-to-cart2">Add to Cart</button>
               
                </div>
                
            )
            
        })
    }
</div>
)
}

export default petservicesssss