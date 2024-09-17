import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPaw, faShieldAlt, faCapsules } from '@fortawesome/free-solid-svg-icons'; // Import icons
import Img from '../Assets/grouppets.jpg';
import '../App.css';

function Nav() {
  return (
    <div className='nav'>
      <p className='para'>RUKPET</p>
      <img src={Img} alt='grouppets' className='img' style={{ width: '100px' }} />
      <ul>
        <li className='l1'>
          <Link to='/home'>
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li className='l2'>
          <Link to='/petservices'>
            <FontAwesomeIcon icon={faPaw} /> Pet Services
          </Link>
        </li>
        <li className='l3'>
          <Link to='/vetinsurance'>
            <FontAwesomeIcon icon={faShieldAlt} /> Vet Insurance
          </Link>
        </li>
        <li className='l4'>
          <Link to='/Pharmacy'>
            <FontAwesomeIcon icon={faCapsules} /> Pharmacy
          </Link>
        </li>
      </ul>
      <div className='logout'>
        <Link to='/'>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Nav;
