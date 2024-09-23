import React, { useState, useContext } from 'react';
import { CartContext } from '../Single/CartContext';

function Order() {
    const { cartItems, totalAmount } = useContext(CartContext);
    const [details, setDetails] = useState({ name: '', phone: '', address: '' });
    const [isOrdered, setIsOrdered] = useState(false);

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the details to a server
        setIsOrdered(true);
    };

    return (
        <div>
            {isOrdered ? (
                <h2>Order placed successfully!</h2>
            ) : (
                <>
                    <h2>Order Details</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
                        <button type="submit">Confirm Order</button>
                    </form>
                    <h3>Total Amount: ${totalAmount()}</h3>
                </>
            )}
        </div>
    );
}

export default Order;
