import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { breads } from '../Data/Breads';
import { catbreeds } from '../Data/Catbreedsdata';
import { parrotbreeds } from '../Data/Parraotdata';
import { CartContext } from '../Single/CartContext'; 


const Data1 = {
    breeddog: breads,
    breedcat: catbreeds,
    breedparrot: parrotbreeds,
};

function Details() {
    const { category, id } = useParams();
    const [item, setItem] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const data1 = Data1[category];
        if (data1) {
            const foundItem = data1.find(item => item.id === parseInt(id));
            setItem(foundItem);
        } else {
            console.error(`Data for category "${category}" not found`);
        }
    }, [category, id]);

    if (!item) {
        return <p className='not-found'>Item not found or category does not exist</p>;
    }

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
