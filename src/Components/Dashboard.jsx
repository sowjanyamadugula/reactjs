import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from './Nav'; 
import { breads } from '../Data/Breads';
import { catbreeds } from '../Data/Catbreedsdata';
import { parrotbreeds } from '../Data/Parraotdata';
import '../App.css'; 
import Fish from '../Assets/fish.png'


const Card = ({ title, icon, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="icon-title-container">
          <div className="icon">{icon}</div>
          <h3 className="title">{title}</h3>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

function Dashboard() {
  const dogData = breads.slice(0, 3); 
  const catData = catbreeds.slice(0, 3); 
  const parrotData = parrotbreeds.slice(0, 3);
  

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

         
          <div className='secdash'>
            <h2 className='food-heading'>Types of Dog Breeds</h2>
            <div className="breed3">
              {dogData.map((dog) => (
                <div className='breed' key={dog.id}>
                   <Link to={`/details/dog/${dog.id}`}>
                  <img src={dog.image} alt={dog.name} />
                  <p>Brand Name: {dog.name}</p>
                  <p>Price: ${dog.price}</p>
                 
                    <button className="add-to-cart2">add to cart</button>
                  </Link>
                </div>
              ))}
              <Link to='/breads'>
                <p className='viewmore'>View more</p>
              </Link>
            </div>
          </div>

       
          <div className='secdash'>
            <h2 className='catbreed1'>Types of Cat Breeds</h2>
            <div className="breed3">
              {catData.map((cat) => (
                <div className='breed' key={cat.id}>
                   <Link to={`/details/cat/${cat.id}`}>
                  <img src={cat.image} alt={cat.name} />
                  <p>Brand Name: {cat.name}</p>
                  <p>Price: ${cat.price}</p>
                 
                    <button className="add-to-cart2">add to cart</button>
                  </Link>
                </div>
              ))}
              <Link to='/catbreeds'>
                <p className='viewmore'>View more</p>
              </Link>
            </div>
          </div>
          <div className='secdash'>
            <h2 className='catbreed1'>Types of Parrot Breeds</h2>
            <div className="breed3">
              {parrotData.map((parrot) => (
                <div className='breed' key={parrot.id}>
                  <Link to={`/details/parrot/${parrot.id}`}>
                  <img src={parrot.image} alt={parrot.name} />
                  <p>Brand Name: {parrot.name}</p>
                  <p>Price: ${parrot.price}</p>
                  <button className="add-to-cart2">add to cart</button>
                  </Link>
                </div>
              ))}
              <Link to='/parrotbreeds'>
                <p className='viewmore'>View more</p>
              </Link>
            </div>
          </div>

        
          <section>
            <h1 className="Happiness">Happiness Guarantee</h1>
            <div className="container main">
              <div className="main-content">
                
                <div className="features-left">
                  <Card
                    title="Secure Payment"
                    icon={<i className="fas fa-shield-alt"></i>}
                    description="Petsfolio holds funds until the job is done, paying pet masters only upon completion of service."
                  />
                  <Card
                    title="Pay As You Go"
                    icon={<i className="fas fa-thumbs-up"></i>}
                    description="Pay for only what you use with our popular and flexible payment option."
                  />
                  <Card
                    title="Industry Lowest Prices"
                    icon={<i className="fas fa-money-bill"></i>}
                    description="Our pet services have the industry's lowest cost, providing value to pet parents and carers."
                  />
                  <Card
                    title="Pet Insurance with Services"
                    icon={<i className="fas fa-paw"></i>}
                    description="Ensure your pet's safety with included insurance coverage when you book Petsfolio."
                  />
                </div>

               
                <div className="image-center">
                  <img src={Fish} alt="Pet Owner" className="center-image" />
                </div>

              
                <div className="features-right">
                  <Card
                    title="Verified Pet Masters"
                    icon={<i className="fas fa-user-check"></i>}
                    description="We personally verify and train all pet masters to provide the best care for your pet."
                  />
                  <Card
                    title="50000+ Happy Customers"
                    icon={<i className="fas fa-smile"></i>}
                    description="Petsfolio is loved for providing professional pet masters, competitive prices, and commitment."
                  />
                  <Card
                    title="Customized Packages"
                    icon={<i className="fas fa-cog"></i>}
                    description="Customize your service package to fit your specific needs when booking with us."
                  />
                  <Card
                    title="Mobile App Service Tracking"
                    icon={<i className="fas fa-mobile-alt"></i>}
                    description="Our mobile app allows you to track your pet, manage payments, and enjoy other hassle-free services."
                  />
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
