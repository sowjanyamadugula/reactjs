import React from 'react';
import Nav from './Nav';
import { Col, Row } from 'react-bootstrap';
import Dog from '../Assets/dogs.jpeg';
import Cat from '../Assets/cats.jpg';
import Parrot from '../Assets/parrot.avif';

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
            <h2 className='typesofpets'>Types Of Pets</h2>
            <div className="container thambnail">
              <div className="row">
                <div className="col-md-4">
                  <div className="thumbnail">
                    <a href={Dog} target="_blank" rel="noopener noreferrer">
                      <img src={Dog} alt="Lights" className="gallery-img" style={{ width: '100%' }} />
                      <div className="caption">
                        <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="thumbnail">
                    <a href={Cat} target="_blank" rel="noopener noreferrer">
                      <img src={Cat} alt="Nature" className="gallery-img" style={{ width: '100%' }} />
                      <div className="caption">
                        <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="thumbnail">
                    <a href={Parrot} target="_blank" rel="noopener noreferrer">
                      <img src={Parrot} alt="Fjords" className="gallery-img" style={{ width: '100%' }} />
                      <div className="caption">
                        <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
