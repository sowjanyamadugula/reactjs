import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { breads } from '../Data/Breads';
import { catbreeds } from '../Data/Catbreedsdata';
import { parrotbreeds } from '../Data/Parraotdata';
import { CartContext } from '../Single/CartContext'; 


const Data1 = {
    dog: breads,
    cat: catbreeds,
    parrot: parrotbreeds,
};

function Details() {
    const { category, id } = useParams(); 
    const [item, setItem] = useState(null);
    const { addToCart, cartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    useEffect(() => {
        const data1 = Data1[category];
        if (data1) {
            const foundItem = data1.find(item => item.id === parseInt(id));
            setItem(foundItem);
        }
    }, [category, id]);

    if (!item) {
        return <p className='not-found'>Item not found or category does not exist</p>;
    }

    // Check if item is already in the cart
    const cartItem = cartItems.find(cartItem => cartItem.id === item.id);

    return (
        <>
            <div className="item-detail-container">
                <h1 className="item-name">{item.name}</h1>
                <img src={item.image} alt={item.name} className="item-image" />
                <p className="item-price">Price: {item.price}</p>

                {cartItem ? (
                    <div>
                        <button className="decrease-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span className="quantity">{cartItem.quantity}</span>
                        <button className="increase-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                ) : (
                    <button className="order-button" onClick={() => addToCart(item)}>Add to Cart</button>
                )}
            </div>
        </>
    );
}

export default Details;