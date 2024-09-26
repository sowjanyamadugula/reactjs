import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  
  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  const totalAmount = cartItems.reduce((total, item) => 
    total + (Number(item.price) * (item.quantity || 0)), 0
  ).toFixed(2); 

  const handlePlaceOrder = () => {
   
    navigate('/order', { state: { cartItems } });
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>${Number(item.price).toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)} aria-label="Decrease quantity">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} aria-label="Increase quantity">+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          
        
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Total Items: {totalItems}</p>
            <p>Total Amount: ${totalAmount}</p>
          </div>
        </>
      )}

      {cartItems.length > 0 && (
        <div className="checkout-button">
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
