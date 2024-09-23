import React, { useContext } from 'react';
import { CartContext } from '../Single/CartContext';

function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name} - Price: {item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
