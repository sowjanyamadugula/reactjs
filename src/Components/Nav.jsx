import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../Assets/grouppets.jpg'
import '../App.css'


function Nav() {
  return (
    <div className='nav'>
       <p className='para'>Hello</p>
      <img src={Img} alt='grouppets'className='img' Style={{width:'100px'}}/>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Services'> Pet Services</Link></li>
        <li><Link to='/Pharmacy'>Pharmacy</Link></li>
      </ul>
      <div className='logout'>
        <Link to='/'>Logout</Link>
      </div>
    </div>
  );
}

export default Nav;
