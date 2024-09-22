import React from 'react'
import Pharmacylogo from '../Assets/petphamcylogo.png';
import '../App.css';
import Care from '../Assets/care1.png';
import Care1 from '../Assets/care2.jpg';
import { medican } from '../Data/Medicansdata';
import Nav from './Nav';
import { Col, Row } from 'react-bootstrap';


function Petmedicans() {
    const Petmedican = medican.slice(0, 12);

    return (
      <div className='container-fluid'>
      <Row>
        <Col sm={2}>
          <Nav />
        </Col>
        <Col sm={10}>
      
      <div>
        <header className='logohead'>
          <img src={Pharmacylogo} alt="Pharmacy Logo" />
          <h1>Pets Health Care Pharmacy</h1>
        </header>
  
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Care} alt="Los Angeles" className="d-block" style={{ width: '100%' }} />
          </div>
          <div className="carousel-item">
            <img src={Care1} alt="Chicago" className="d-block" style={{ width: '100%' }} />
          </div>
          <div className="carousel-item">
            <img src={Care} alt="New York" className="d-block" style={{ width: '100%' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
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
      </Col>
      </Row>
    </div>
    );
  }

export default Petmedicans;
