import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Nav from './Components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Dogbreads from './pages/Dogbreads';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/nav" element={<Nav/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/breads' element={<Dogbreads />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
