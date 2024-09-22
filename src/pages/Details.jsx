import React from 'react';
import { useParams } from 'react-router-dom';
import { breads } from '../Data/Breads';
import { catbreeds } from '../Data/Catbreedsdata';
import { parrotbreeds } from '../Data/Parraotdata';

function Details() {
  const { id, type } = useParams();
  let breedData;

  // Determine the type of breed and find the corresponding data
  if (type === 'dogbre') {
    breedData = breads.find((e) => e.id === parseInt(id));
  } else if (type === 'catbre') {
    breedData = catbreeds.find((e) => e.id === parseInt(id));
  } else if (type === 'parrotbre') {
    breedData = parrotbreeds.find((e) => e.id === parseInt(id));
  }

  return (
    <div className='breed-details'>
      {breedData ? (
        <>
          <img src={breedData.image} alt={breedData.name} />
          <h2>{breedData.name}</h2>
          <p>Price: ${breedData.price}</p>
          <button className="add-to-cart">Add to Cart</button>
        </>
      ) : (
        <p>Breed Not Found</p>
      )}
    </div>
  );
}

export default Details;
