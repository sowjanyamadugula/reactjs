import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { breads } from '../Data/Breads';
import { catbreeds } from '../Data/Catbreedsdata';
import { parrotbreeds } from '../Data/Parraotdata';
import { CartContext } from '../Single/CartContext'; 
import { catfoodbrands } from '../Data/Catfoods';
import { foodbrands } from '../Data/Dogfoodbrades';
import { parrotfoodbrand } from '../Data/Parratfood';
import {medican} from '../Data/Medicansdata';
import  {catdogservices} from '../Data/serivicesdata'

// Map data to categories
const Data1 = {
    dog: breads,
    cat: catbreeds,
    parrot: parrotbreeds,
    catfood:catfoodbrands,
    dogfood:foodbrands,
    parrotfood:parrotfoodbrand,
    medicanpets:medican,
    serviespts:catdogservices,
};

function Details() {
    const { category, id } = useParams(); // Get category and id from URL
    const [item, setItem] = useState(null);
    const { addToCart } = useContext(CartContext);

    // Log category and id for debugging
    useEffect(() => {
        console.log('Category:', category);
        console.log('ID:', id);

        const data1 = Data1[category]; // Fetch data based on category

        if (data1) {
            console.log('Data found for category:', data1);
            const foundItem = data1.find(item => item.id === parseInt(id));
            if (foundItem) {
                console.log('Item found:', foundItem);
                setItem(foundItem);
            } else {
                console.error('Item with this ID not found');
            }
        } else {
            console.error(`Data for category "${category}" not found`);
        }
    }, [category, id]);

    // If item is not found, show an error message
    if (!item) {
        return <p className='not-found'>Item not found or category does not exist</p>;
    }

    // Render item details
    const handleAddToCart = () => {
        addToCart(item);
        alert(`${item.name} has been added to your cart!`);
    };

    return (
        <div className="item-detail-container">
            <h1 className="item-name">{item.name}</h1>
            <img src={item.image} alt={item.name} className="item-image" />
            <p className="item-price">Price: {item.price}</p>
            <button className="order-button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default Details;
