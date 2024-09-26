import React, { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0) 
    );
  };

  
  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
