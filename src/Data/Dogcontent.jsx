// App.js
import React from 'react';
import ServiceCard from '../pages/Dogservicescard'; // Correctly reference the ServiceCard component
import './App.css'; // Import the CSS file

 const App = () => {
     const services = [
    {
    //   imgSrc: 'spa-bath-icon.png',
      altText: 'Spa Bath',
      title: 'Spa Bath',
      originalPrice: 1198,
      discountedPrice: 999,
      features: [
        'Bath With Shampoo & Conditioner', 
        'Blow Dry', 
        'Nail Clipping', 
        'Ear Cleaning', 
        'Eyes Cleaning', 
        'Paw Massage', 
        'Combing/Brushing'
      ],
      buttonText: 'Book A Groomer',
    },
    {
    //   imgSrc: 'bath-basic-icon.png',
      altText: 'Bath + Basic Grooming',
      title: 'Bath + Basic Grooming',
      originalPrice: 1798,
      discountedPrice: 1499,
      features: [
        'Bath With Shampoo & Conditioner', 
        'Blow Dry', 
        'Face Haircutting', 
        'Sanitary Trim', 
        'Nail Clipping', 
        'Ear Cleaning', 
        'Eye Cleaning', 
        'Teeth Cleaning/Mouth Spray'
      ],
      buttonText: 'Book A Groomer',
    },
    {
    //   imgSrc: 'full-service-icon.png',
      altText: 'Full Service',
      title: 'Full Service',
      originalPrice: 2398,
      discountedPrice: 1999,
      features: [
        'Bath With Shampoo & Conditioner', 
        'Blow Dry', 
        'Full body Trimming/Zero Haircut', 
        'Eye Cleaning', 
        'Ear Cleaning', 
        'Body Massage', 
        'Sanitary Trim', 
        'Nail Clipping'
      ],
      buttonText: 'Book A Groomer',
    },
  ];

  return (
    <div className="card-container">
      {services.map((service, index) => (
        <ServiceCard 
          key={index}
          imgSrc={service.imgSrc}
          altText={service.altText}
          title={service.title}
          originalPrice={service.originalPrice}
          discountedPrice={service.discountedPrice}
          features={service.features}
          buttonText={service.buttonText}
        />
      ))}
    </div>
  );
};

export default App;
