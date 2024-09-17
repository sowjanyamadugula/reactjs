import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="form-container ">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        
       <Link to='/dashboard'>
        <button type="submit" className="btn btn-success me-2">Login</button>
        </Link>
        <br />
<p>Don't have account...?</p>
        <Link to='/signup'>
          <button type="button" className="btn btn-primary">Sign Up</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
