import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../Assets/grouppets.jpg'
import '../App.css'


function Nav() {
  return (
    <div className='nav'>
       <p className='para'>RUKPET</p>
      <img src={Img} alt='grouppets'className='img' Style={{width:'100px'}}/>
      <ul>
        <li className='l1'><Link to='/home'>Home</Link></li>
        <li className='l2'><Link to='/petservices'>Pet Services</Link></li>
        <li className='l3'><Link to='/vetinsurance'> Vet Insurance</Link></li>
        <li className='l4'><Link to='/Pharmacy'>Pharmacy</Link></li>
      </ul>
      <div className='logout'>
        <Link to='/'>Logout</Link>
      </div>
    </div>
  );
}

export default Nav;
