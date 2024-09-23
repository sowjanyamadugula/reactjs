import React from 'react'
import {medican} from '../Data/Products'
import { Link } from 'react-router-dom'

function petmed() {
  return (
    <div className='petmed'>
        {
            medican.map((e)=>{
                return(
                    
                    <div className='petmed1'>
                    <Link to={`/details/${e.id}`}>
                        <img src={e.image} alt="" />
                        
                        <p>Brand Name:{e.name}</p>
                        
                    </Link>
                    </div>
                    
                )
                
            })
        }
    </div>
  )
}

export default petmed;
