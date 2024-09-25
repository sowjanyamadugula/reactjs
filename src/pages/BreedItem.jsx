import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom
import { CartContext } from '../Single/CartContext'; // Adjust the path according to your file structure

function BreedItem({ item }) {
  const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className='breed2'>
      <Link to={`/details/${item.type}/${item.id}`}>
        <img src={item.image} alt={item.name} />
        <p>Brand Name: {item.name}</p>
        <p>Price: ${item.price}</p>
      </Link>
      <div>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
        <button onClick={() => increaseQuantity(item.id)}>+</button>
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
      <p>Quantity: {item.quantity || 0}</p>
    </div>
  );
}

export default BreedItem;
