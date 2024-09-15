import React from 'react'

import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='nav'>
    
        <ul>
            <Link to='/home'><li>Home</li></Link>
            <Link to='/About'><li>About</li></Link>
            <Link to='/Servies'><li>Servies</li></Link>
            <Link to='/Pharmacy'><li>Pharmacy</li></Link>
        </ul>
        <Link to='/'> <p>Logout</p></Link>
    </div>
  )
}

export default Nav