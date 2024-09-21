import React from 'react'
import Pharmacylogo from '../Assets/petphamcylogo.png';
import '../App.css';
import Care from '../Assets/care1.png';
import Care1 from '../Assets/care2.jpg';
import { medican } from '../Data/Medicansdata';

function Petmedicans() {
    const Petmedican = medican.slice(0, 12);

    return (
      <div>
        <header className='logohead'>
          <img src={Pharmacylogo} alt="Pharmacy Logo" />
          <h1>Pets Health Care Pharmacy</h1>
        </header>
  
        <div className="container">
          <h2>Carousel Example</h2>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
  
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Care} alt="Care Image 1" style={{ width: '100%' }} />
              </div>
              <div className="carousel-item">
                <img src={Care1} alt="Care Image 2" style={{ width: '100%' }} />
              </div>
              <div className="carousel-item">
                <img src={Care} alt="Care Image 3" style={{ width: '100%' }} />
              </div>
            </div>
  
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
  
        <div className="petmedicandata">
          {Petmedican.map((e) => (
            <div className='petmed1' key={e.id}>
              <img src={e.image} alt={e.name} />
              <p>Brand Name: {e.name}</p>
              <p>Price: ${e.price}</p>
              <button className="add-to-cart1">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Petmedicans
