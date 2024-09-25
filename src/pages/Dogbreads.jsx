import React from 'react';
import { breads } from '../Data/Breads';
import { Link } from 'react-router-dom';


function Dogbreads() {
  return (
    <>
           <div className='containerpetservices'>
        <div className='rowicons'>
           
        <div className='col-sm-2 itemicons'>
        <Link to='/home'>
           <p className='i3'>Home</p>
           </Link></div>
         
          <div className='col-sm-2 itemicons'>
          <Link to='/dashboard'>
            <p className='i3'>Dashboard</p>
            </Link>
          </div>
          
        
          <div className='col-sm-2 itemicons'>
          <Link to='/petservices'>
            <p className='i3'>Pets services</p></Link>
        </div>
          
        
          <div className='col-sm-2 itemicons'>
          <Link to='/petfood'>
            <p className='i3'>Pets Foods</p></Link>
          </div>
          
          
          <div className='col-sm-2 itemicons'>
          <Link to='/petmedican'>
            <p className='i3'>Pets Medican</p> </Link> 
          </div>
         
        </div>
      </div>
  
    <div className='bread1'>
  
        {
            breads.map((e)=>{
                return(
                  
                    <div className='breed2'>

                    <Link to={`/details/dog/${e.id}`}>
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
    </>
  )
}
   
   

export default Dogbreads;
