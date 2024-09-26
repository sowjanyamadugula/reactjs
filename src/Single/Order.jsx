import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Order() {
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] }; 

  const [userDetails, setUserDetails] = useState({ name: '', address: '', phone: '' });
  const [orderPlaced, setOrderPlaced] = useState(false);

  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => {
   
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace('₹', '').replace(',', '')) 
      : item.price; 

    return total + (price * item.quantity);
  }, 0).toFixed(2); 

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrderSubmit = () => {
    
    if (!userDetails.name || !userDetails.address || !userDetails.phone) {
      alert("Please fill out all fields before placing the order.");
      return; 
    }

   
    setOrderPlaced(true);

   
    setUserDetails({ name: '', address: '', phone: '' });
  };

  return (
    <div className="order-container">
      <h2>Your Order</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <h3>Items Summary:</h3>
          <p>Total Items: {totalItems}</p>
          <p>Total Amount: ₹{totalAmount}</p>
        </div>
      )}
      
      <h3>Enter Your Details</h3>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={userDetails.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Your Address"
        value={userDetails.address}
        onChange={handleInputChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        value={userDetails.phone}
        onChange={handleInputChange}
      />
      <button onClick={handleOrderSubmit}>Place Order</button>

      {orderPlaced && (
        <div className="order-confirmation">
          <h3>Order Placed!</h3>
          <p>Thank you, {userDetails.name}. Your order has been placed successfully.</p>
        </div>
      )}
    </div>
  );
}

export default Order;
