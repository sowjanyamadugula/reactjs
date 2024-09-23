import React, { createContext, useState } from 'react';

// Create a Context for the cart
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(i => i.id === item.id);
            if (existingItem) {
                return prevItems.map(i => 
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };

    const increaseQuantity = (itemId) => {
        setCartItems((prevItems) => 
            prevItems.map(item => 
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (itemId) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === itemId);
            if (existingItem.quantity > 1) {
                return prevItems.map(item => 
                    item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            return prevItems.filter(item => item.id !== itemId);
        });
    };

    const totalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};
