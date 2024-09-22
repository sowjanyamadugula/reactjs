import React from 'react'
import { cdservice } from '../Data/Catservicesdata';
import { Link } from 'react-router-dom';

function Catser() {
    return (
        <div className='bread1'>
        
        {
           cdservice.map((e)=>{
                return(
                  
                    <div className='breed2'>
    
                    <Link to={`/cdservices/${e.id}`}> </Link>
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
export default Catser;