// src/Single/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Adjust the import based on your structure

function Cart() {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalAmount } = useContext(CartContext);

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
                            <p>{item.name} - Price: ${item.price} x {item.quantity}</p>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total Amount: ${totalAmount()}</h3>
            <button onClick={() => alert('Order placed!')}>Place Order</button>
        </div>
    );
}

export default Cart;
