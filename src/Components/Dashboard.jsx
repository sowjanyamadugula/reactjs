import React from 'react';
import Nav from './Nav';
import Fish from '../Assets/fish.png';
import { Col, Row } from 'react-bootstrap';
import { breads } from '../Data/Breads';
import { Link } from 'react-router-dom';
import { catbreeds } from '../Data/Catbreedsdata';
import '../App.css';
import { parrotbreeds } from '../Data/Parraotdata';



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
  const NewData = breads.slice(0,3);
  const NewData1=catbreeds.slice(0,3);
  const NewDate2=parrotbreeds.slice(0,3);

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
<div  className='secdash'>
        <h2 className='catbreed1'>Types of Cat Breeds</h2>
       
        <div className="breed3">
          {NewData1.map((e) => (
            <div className='breed' key={e.id}>
              <img src={e.image} alt={e.name} />
              <p>Brand Name: {e.name}</p>
              <p>Price: ${e.price}</p>
              <button className="add-to-cart2">Add to Cart</button>
            </div>

          ))}
           <Link to='/catbreeds'>
<p className='viewmore'> View more</p>
</Link>
          
        </div>
        </div>
        <div  className='secdash'>
        <h2 className='catbreed1'>Types of Parrot Breeds</h2>
       
       <div className="breed3">
         {NewDate2.map((e) => (
           <div className='breed' key={e.id}>
             <img src={e.image} alt={e.name} />
             <p>Brand Name: {e.name}</p>
             <p>Price: ${e.price}</p>
             <button className="add-to-cart2">Add to Cart</button>
           </div>

         ))}
          <Link to='/parrotbreeds'>
<p className='viewmore'> View more</p>
</Link>
         
       </div>
        </div>
        <section >
      <div className='secdash'>
              <h1 className="Happiness">Happiness Guarantee</h1>
                <div className="container main">
                    <div className="main-content">
                        {/* Left side with features */}
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

                        {/* Central Image Section */}
                        <div className="image-center">
                            <img src={Fish} alt="Pet Owner" className="center-image" />
                        </div>

                        {/* Right side with features */}
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
            



        
      </div>
      </section>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
