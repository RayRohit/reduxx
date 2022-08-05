import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Login/Signup';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f0f4f8' }} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
