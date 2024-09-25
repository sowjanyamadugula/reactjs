import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { breads } from '../Data/Breads';
import { catbreeds } from '../Data/Catbreedsdata';
import { parrotbreeds } from '../Data/Parraotdata';
import { CartContext } from '../Single/CartContext'; 
import { catfoodbrands } from '../Data/Catfoods';
import { foodbrands } from '../Data/Dogfoodbrades';
import { parrotfoodbrand } from '../Data/Parratfood';
import { medican } from '../Data/Medicansdata';
import { catdogservices } from '../Data/serivicesdata';


const Data1 = {
    dog: breads,
    cat: catbreeds,
    parrot: parrotbreeds,
    catfood: catfoodbrands,
    dogfood: foodbrands,
    parrotfood: parrotfoodbrand,
    medicanpets: medican,
    serviespts: catdogservices,
};

function Details() {
    const { category, id } = useParams(); 
    const [item, setItem] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        console.log('Category:', category);
        console.log('ID:', id);

        const data1 = Data1[category];

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

    if (!item) {
        return <p className='not-found'>Item not found or category does not exist</p>;
    }

    const handleAddToCart = () => {
        addToCart(item);
        alert(`${item.name} has been added to your cart!`);
    };

    return (
        <>
           <div className='containerpetservices'>
        <div className='rowicons'>
           
        <div className='col-sm-2 itemicons'>
        <Link to='/home'>
           <p className='i3'>Home</p>
           </Link></div>
         
          <div className='col-sm-2 itemicons'>
          <Link to='/dashboard'>
            <p className='i3'>Dashboard</p>
            </Link>
          </div>
          
        
          <div className='col-sm-2 itemicons'>
          <Link to='/petservices'>
            <p className='i3'>Pets services</p></Link>
        </div>
          
        
          <div className='col-sm-2 itemicons'>
          <Link to='/petfood'>
            <p className='i3'>Pets Foods</p></Link>
          </div>
          
          
          <div className='col-sm-2 itemicons'>
          <Link to='/petmedicans'>
            <p className='i3'>Pets Medican</p> </Link> 
          </div>
         
        </div>
      </div>

            <div className="item-detail-container">
                <h1 className="item-name">{item.name}</h1>
                <img src={item.image} alt={item.name} className="item-image" />
                <p className="item-price">Price: {item.price}</p>
                <button className="order-button" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </>
    );
}

export default Details;
