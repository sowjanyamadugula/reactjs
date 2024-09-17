import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

import '../App.css';
import Dogtrain from '../Assets/dog-training.png';
import Dogwalk from '../Assets/dog-walking.png';
import Doggrom from '../Assets/dog-grooming.png';
import Dogboard from '../Assets/dog-boarding.png';
import Dogsit from '../Assets/dog-sitting.png';
import Dogvet from '../Assets/dog-vet.png';
import Sidedog from '../Assets/sidedog1.png';
import Sidedogg from '../Assets/sidedog2.png';
import Sidedoggg from '../Assets/sidedog3.png';

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

function Home() {
    return (
        <div>
            <section className='background'>
                <div className="grid-container head">
                    <div className="item1">
                        <div className='cointainer row'>
                            <div className='col-sm-2'><p>pets services</p></div>
                            <div className='col-sm-2'><p>pets Insurance</p></div>
                            <div className='col-sm-2'><p>Pet Insurance</p></div>
                            <div className='col-sm-2'><p>Vet Services</p></div>
                            <div className='col-sm-2'><p>Academy</p></div>
                            <div className='col-sm-2'><p>Become a Pet Master</p></div>
                        </div> 
                    </div>
                </div>

                <div className='background'>
                    <p className='h1'>Top-notch Pet Services at Competitive Prices</p>
                    <div className='cointainer dogs'>
                        <div className='row '>
                            <div className='col-md-7 list'>
                                <div className='hellodogs'>
                                    <div className='col-sm-2'>
                                        <img src={Dogtrain} className='d1' alt="dogtrain" />
                                        <h6 className='dogh6'>Dog Training</h6>
                                    </div>
                                    <div className='col-sm-2'>
                                        <img src={Dogwalk} className='d2' alt="dogwalk" />
                                        <h6 className='dogh6'>Dog Walking</h6>
                                    </div>
                                    <div className='col-sm-2'>
                                        <img src={Doggrom} className='d3' alt="doggrom" />
                                        <h6 className='dogh6'>Grooming</h6>
                                    </div>
                                    <div className='col-sm-2'>
                                        <img src={Dogboard} className='d4' alt="dogboard" />
                                        <h6 className='dogh6'>Boarding</h6>
                                    </div>
                                    <div className='col-sm-2'>
                                        <img src={Dogsit} className='d5' alt="dogsit" />
                                        <h6 className='dogh6'>Dog Sitting</h6>
                                    </div>
                                    <div className='col-sm-2'>
                                        <img src={Dogvet} className='d6' alt="dogvet" />
                                        <h6 className='dogh6'>Vet@home</h6>
                                    </div>
                                </div> 
                            </div>
                            <div className='col-md-5'>
                                <img src={Sidedoggg} alt='sidedog3' className='sidedog' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
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
                            <img src={Sidedog} alt="Pet Owner" className="center-image" />
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
            </section>
        </div>
    );
}

export default Home;
