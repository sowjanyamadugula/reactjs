import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      // Proceed with form submission (e.g., API call)
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-box1">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="firstName" required="" onChange={handleChange} />
            <label>First Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="lastName" required="" onChange={handleChange} />
            <label>Last Name</label>
          </div>
          <div className="user-box">
            <input type="email" name="email" required="" onChange={handleChange} />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="number" name="number" required="" onChange={handleChange} />
            <label>Number</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required="" onChange={handleChange} />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="confirmPassword" required="" onChange={handleChange} />
            <label>Confirm Password</label>
          </div>

          
          

          <Link to="/">
            <button type="button" className="btn btn-primary">Sing Up</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
