import React from 'react';
import Nav from './Nav';
import { Col, Row } from 'react-bootstrap';
import { breads } from '../Data/Breads';
import { Link } from 'react-router-dom';

function Dashboard() {
  const NewData = breads.slice(0, 4);

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
          <h2 className='breed-heading'>Types of Dog Breeds</h2>
          <div className='maindata1'>
            {
              NewData.map((e) => (
                <div className='breed-item1' key={e.id}>
               
                 <img className='image-animate' src={e.image} alt={e.name} />
                 <div className='img-id-name'>
                  <p className='names'>{e.id}</p>
                  <p className='names'>{e.name}</p>
                 </div>
                </div>
              ))
            }
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
