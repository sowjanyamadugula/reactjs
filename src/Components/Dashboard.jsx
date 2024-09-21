import React from 'react';
import Nav from './Nav';
 
import { Col, Row } from 'react-bootstrap';
import { breads } from '../Data/Breads';
import { Link } from 'react-router-dom';
import { catbreeds } from '../Data/Catbreedsdata';

function Dashboard() {
  const NewData = breads.slice(0,3);
  const NewData1=catbreeds.slice(0,3);

  return (
    <div className='container-fluid'>
      <Row>
        <Col sm={2}>
          <Nav />
        </Col>
        <Col sm={10}>
          <div className="dash">
            <p className='hello'>Hello, welcome to pets home</p>
          </div>
          <div className='containerpetservices'>
        <div className='rowicons'>
          <div className='col-sm-2 itemicons'>
           
            <p>Pet Training At Home</p>
          </div>
          <div className='col-sm-2 itemicons'>
            
            <p>Pet Walking</p>
          </div>
          <div className='col-sm-2 itemicons'>
           
            <p>Pet Grooming</p>
          </div>
          <div className='col-sm-2 itemicons'>
            
            <p>Pet Boarding</p>
          </div>
          <div className='col-sm-2 itemicons'>
           
            <p>Pet Sitting</p>
          </div>
          </div>
          
        </div>
       
        <h2 className='food-heading'>Types of Dog Breeds</h2>
       
        <div className="breed3">
          {NewData.map((e) => (
            <div className='breed' key={e.id}>
              <img src={e.image} alt={e.name} />
              <p>Brand Name: {e.name}</p>
              <p>Price: ${e.price}</p>
              <button className="add-to-cart2">Add to Cart</button>
            </div>

          ))}
           <Link to='/breads'>
<p className='viewmore'> View more</p>
</Link>
          
        </div>

        <h2 className='catbreed1'>Types of Cat Breeds</h2>
       
        <div className="catbreed3">
          {NewData1.map((e) => (
            <div className='catbreed' key={e.id}>
              <img src={e.image} alt={e.name} />
              <p>Brand Name: {e.name}</p>
              <p>Price: ${e.price}</p>
              <button className="add-to-cart3">Add to Cart</button>
            </div>

          ))}
           <Link to='/breads'>
<p className='viewmore'> View more</p>
</Link>
          
        </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
