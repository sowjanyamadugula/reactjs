import React from 'react';
import { breads } from '../Data/Breads';
import { Link } from 'react-router-dom';

function Dogbreads() {
  return (
   
    <div className='maindata'>
      
      {
        breads.map((e) => {
          return (
            <div className='breed-item' key={e.id}>
              <Link to={`/breads/${e.id}`}>
                <img className='image-animate' src={e.image} alt={e.name} />
                <p className='breadname'>Breed name: {e.name}</p>
              </Link>
            </div>
          );
        })
      }
    </div>
  );
}

export default Dogbreads;
