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
    const { addToCart, cartItems } = useContext(CartContext);

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

    
    const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
    const buttonLabel = cartItem ? 'Added to Cart' : 'Add to Cart';

    return (
        <>
            <div className='containerpetservices'>
                <div className='rowicons'>
                    <div className='col-sm-2 itemicons'>
                        <Link to='/home'>
                            <p className='i3'>Home</p>
                        </Link>
                    </div>
                    <div className='col-sm-2 itemicons'>
                        <Link to='/dashboard'>
                            <p className='i3'>Dashboard</p>
                        </Link>
                    </div>
                    <div className='col-sm-2 itemicons'>
                        <Link to='/petservices'>
                            <p className='i3'>Pets Services</p>
                        </Link>
                    </div>
                    <div className='col-sm-2 itemicons'>
                        <Link to='/petfood'>
                            <p className='i3'>Pets Foods</p>
                        </Link>
                    </div>
                    <div className='col-sm-2 itemicons'>
                        <Link to='/petmedican'>
                            <p className='i3'>Pets Medican</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="item-detail-container">
                <h1 className="item-name">{item.name}</h1>
                <img src={item.image} alt={item.name} className="item-image" />
                <p className="item-price">Price: ₹{item.price}</p>

                <button
                    className={`add-to-cart2 ${cartItem ? 'added' : ''}`}
                    onClick={(e) => {
                        e.preventDefault(); 
                        if (!cartItem) { 
                            addToCart({ ...item, quantity: 1 }); 
                        }
                    }}
                    disabled={cartItem} 
                >
                    {buttonLabel}
                </button>
            </div>
        </>
    );
}

export default Details;
