import React from 'react';
import Nav from './Nav';
import { Col, Row } from 'react-bootstrap';


function Dashboard() {
  return (
    <div className='container-fluid'>
      <Row>
        <Col sm={2}>
          <Nav />
        </Col>
        <Col sm={10}>
          <div className="dash"> 
            <p className='hello'>Hello welcome to pets home</p>
          </div>
          <section className='s1'>
           
          </section>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
