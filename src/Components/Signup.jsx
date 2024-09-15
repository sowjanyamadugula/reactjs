import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="row g-3 needs-validation form-container" onSubmit={handleSubmit} noValidate>
        <div className="col-md-6">
          <label htmlFor="validationCustom01" className="form-label">First name</label>
          <input type="text" className="form-control" id="validationCustom01" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom02" className="form-label">Last name</label>
          <input type="text" className="form-control" id="validationCustom02" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="validationCustomUsername" className="form-label">Email</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input type="email" className="form-control" id="validationCustomUsername" required />
            <div className="invalid-feedback">
              Please choose a valid email.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustomPassword" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="validationCustomPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="invalid-feedback">
            Please provide a valid password.
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustomConfirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="validationCustomConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div className="invalid-feedback">
            Please confirm your password.
          </div>
        </div>
        <div className="col-12">
            <Link to='/'>
           
          <button className="btn btn-primary  button" type="submit">Sign Up</button> </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
