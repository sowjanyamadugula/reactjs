import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHouseChimney, faDog, faScissors, faHouse, faCat, faCow } from '@fortawesome/free-solid-svg-icons'; 
import '../App.css';
import Dogser from '../Assets/dogser.png'
import Cat from '../Assets/cats.jpg'
import Rabbit from '../Assets/rabbit.png'
import Pig from '../Assets/pig.png'
import Fish from '../Assets/fish.png';
import { catdogservices  } from '../Data/serivicesdata';
import { cdservice } from '../Data/Catservicesdata';


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

function Dogservices()

{

  const Petsdata=catdogservices.slice(0,3);
  const Petsdata1=cdservice.slice(0,3);

  return (
    <div>
      <h1 className='headerpet'>Pet Services</h1>
      <div className='containerpetservices'>
        <div className='rowicons'>
          <div className='col-sm-2 itemicons'>
            <FontAwesomeIcon icon={faHouseChimney}className='i1' />
            <p>Pet Training At Home</p>
          </div>
          <div className='col-sm-2 itemicons'>
            <FontAwesomeIcon icon={faDog}className='i1'  />
            <p>Pet Walking</p>
          </div>
          <div className='col-sm-2 itemicons'>
            <FontAwesomeIcon icon={faScissors}className='i1'  />
            <p>Pet Grooming</p>
          </div>
          <div className='col-sm-2 itemicons'>
            <FontAwesomeIcon icon={faHouse} className='i1' />
            <p>Pet Boarding</p>
          </div>
          <div className='col-sm-2 itemicons'>
            <FontAwesomeIcon icon={faCat}className='i1'  />
            <p>Pet Sitting</p>
          </div>
          
        </div>
      </div>
      <section>
      <h1 className='dogservies'>Types of Pet Services</h1>
      <div className='containerimg'>
        <div className='rowser'>
            <div className='col-md-3 items2' >
                <img src={Dogser} alt="dogser" />
                <h2 className='hearser'>Dog services</h2>
            </div>
            <div className='col-md-3 items2'>
                <img src={Cat} alt="cat" />
                <h2  className='hearser'> Cat Servies</h2>
            </div>
            <div className='col-md-3 items2'>
                <img src={Rabbit} alt="rabbit" />
                <h2  className='hearser'>Rabbit Services</h2>
            </div>
            <div className='col-md-3 items2'>
                <img src={Pig} alt="pig" />
                <h2  className='hearser'>Pig Services</h2>
            </div>
                
        </div>

      </div>
      </section>
      <section>
      <h2 className='petserhead'>Types of Services</h2>
       
       <div className="petservicesss3">
         {Petsdata.map((e) => (
           <div className='petservicesss' key={e.id}>
             <img src={e.image} alt={e.name}  />
             <p>Title:{e.title}</p>
                    <p>originalPrice:{e.originalPrice}</p>
                    <p>discountedPrice{e.discountedPrice}</p>
                    <p>features:{e.features}</p>
             <button className="add-to-cart2">Add to Cart</button>
           </div>

         ))}
          
       </div>
       <h2 className='petserhead'>Types of Services</h2>
       
       <div className="petservicesss3">
         {Petsdata1.map((e) => (
           <div className='petservicesss' key={e.id}>
             <img src={e.image} alt={e.name}  />
             <p>Title:{e.title}</p>
                    <p>originalPrice:{e.originalPrice}</p>
                    <p>discountedPrice{e.discountedPrice}</p>
                    <p>features:{e.features}</p>
             <button className="add-to-cart2">Add to Cart</button>
           </div>

         ))}
          
       </div>







      </section>

<section>
      <div>
        
        
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
    </div>
  );
}

export default Dogservices;
