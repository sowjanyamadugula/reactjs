import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCat, faDog, faDove, faFish } from '@fortawesome/free-solid-svg-icons'; 
import '../App.css';
import { foodbrands } from '../Data/Dogfoodbrades';
import Petfood3 from '../Assets/petfood.png';                                          
import Petfood1 from '../Assets/petfood1.png';
import { catfoodbrands } from '../Data/Catfoods';
import { parrotfoodbrand } from '../Data/Parratfood';
import Nav from './Nav';
import { Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function Petfood() {

  const dogFoodRef = useRef(null);
  const catFoodRef = useRef(null);
  const parrotFoodRef = useRef(null);

 
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const FoodData = foodbrands.slice(0, 12);
  const FoodDatacat = catfoodbrands.slice(0, 12);
  const FoodDataparrot = parrotfoodbrand.slice(0, 4);

  return (
    <div className='container-fluid'>
      <Row>
        <Col sm={2}>
          <Nav />
        </Col>
        <Col sm={10}>
          <div className='pf'>
            <h1 className='headerpet'>Pet Foods</h1>
            <div className='containerpetservices'>
              <div className='rowicons'>
                <div className='col-md-2 itemicons'>
                  <FontAwesomeIcon icon={faDog} className='i1' />
                  <p onClick={() => scrollToSection(dogFoodRef)}>Dog Food</p>
                </div>
                <div className='col-md-2 itemicons'>
                  <FontAwesomeIcon icon={faCat} />
                  <p onClick={() => scrollToSection(catFoodRef)}>Cat Food</p>
                </div>
                <div className='col-md-2 itemicons'>
                  <FontAwesomeIcon icon={faDove} />
                  <p onClick={() => scrollToSection(parrotFoodRef)}>Parrot Food</p>
                </div>
                <div className='col-md-2 itemicons'>
                  <FontAwesomeIcon icon={faCat} />
                  <p>Rabbit Food</p>
                </div>
                <div className='col-md-2 itemicons'>
                  <FontAwesomeIcon icon={faFish} />
                  <p>Fish Food</p>
                </div>
              </div>
            </div>
            
            {/* Carousel */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Petfood3} alt="Los Angeles" className="d-block" style={{ width: '100%' }} />
                </div>
                <div className="carousel-item">
                  <img src={Petfood1} alt="Chicago" className="d-block" style={{ width: '100%' }} />
                </div>
                <div className="carousel-item">
                  <img src={Petfood3} alt="New York" className="d-block" style={{ width: '100%' }} />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>

          
            <section id='df' ref={dogFoodRef}>
              <h2 className='food-heading'>Types of Dog Food</h2>
              <div className='maindata1'>
                {FoodData.map((e) => (
                  <div className='food-item1' key={e.id}>
                    <img className='image-animate' src={e.image} alt={e.name} />
                    <div className='img-id-name-price'>
                      <p className='names'>Name: {e.name}</p>
                      <p className='price'>Price: {e.price}</p>
                      <button className='add-to-cart-btn'>Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            
            <section ref={catFoodRef}>
              <h2 className='food-heading'>Types of Cat Food</h2>
              <div className='maindata1'>
                {FoodDatacat.map((e) => (
                  <div className='food-item1' key={e.id}>
                    <img className='image-animate' src={e.image} alt={e.name} />
                    <div className='img-id-name-price'>
                      <p className='names'>Name: {e.name}</p>
                      <p className='price'>Price: {e.price}</p>
                      <button className='add-to-cart-btn'>Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

       
            <section ref={parrotFoodRef}>
              <h2 className='food-heading'>Types of Parrot Food</h2>
              <div className='maindata1'>
                {FoodDataparrot.map((e) => (
                  <div className='food-item1' key={e.id}>
                    <img className='image-animate' src={e.image} alt={e.name} />
                    <div className='img-id-name-price'>
                      <p className='names'>Name: {e.name}</p>
                      <p className='price'>Price: {e.price}</p>
                      <button className='add-to-cart-btn'>Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Petfood;
