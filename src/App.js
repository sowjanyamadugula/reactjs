import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Nav from './Components/Nav';
import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Dogbreads from './pages/Dogbreads';
import Petservices from './Components/Petservices.jsx';
import Petfood from './Components/Petfood.jsx';
import Petmedicans from './Components/Petmedicans.jsx';
import Catbreed from './pages/Catbreed.jsx';
import Parrotbreed from './pages/Parrotbreed.jsx';
import Catser from './pages/Catser.jsx';
import Details from './pages/Details.jsx';
import { CartProvider } from './Single/CartContext';
import Cart from './Single/Card.jsx'
import Order from './Single/Order.jsx'; 
import Petmed from './pages/Petmed.jsx';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/breads" element={<Dogbreads />} />
          <Route path="/petservices" element={<Petservices />} />
          <Route path="/petfood" element={<Petfood />} />
          <Route path="/petmedican" element={<Petmedicans />} />
          <Route path='/medican' element={<Petmed/>}/>
          <Route path="/catbreeds" element={<Catbreed />} />
          <Route path="/parrotbreeds" element={<Parrotbreed />} />
          <Route path="/catser" element={<Catser />} />
          <Route path="/details/:category/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} /> 
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
