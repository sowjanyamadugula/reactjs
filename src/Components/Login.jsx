import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
       
<div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="uname" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="number" name="num" required=""/>
      
      <label>number</label>
      </div>
    <div class="user-box ">
      <input type="password" name="pswd" required=""/>
      
      <label>Password</label>
    </div>
    
    <Link to="/home">
          <button type="submit" className="btn btn-success me-2">Login</button>
        </Link>
        <br />

        <div className="checkbox-container mb-3">
          <input type="checkbox" id="noAccountCheckbox" className="me-2" />
          <label className='dont'>Don't have an account...?</label>
        </div>

        <Link to="/signup">
          <button type="button" className="btn btn-primary">Sign Up</button>
        </Link>
  </form>
</div>

        
       
      
    </div>
  );
}

export default Login;
