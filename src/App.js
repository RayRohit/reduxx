import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/React/Dashboard/Dashboard';
import Stats from './Components/React/Dashboard/Stats/Stats';
import Home from './Components/React/Home/Home';
import Login from './Components/React/Login/Login';
import Signup from './Components/React/Login/Signup';

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth)
  return (
    <div className="App" style={{ backgroundColor: '#f0f4f8' }} >
      <BrowserRouter>
        <Routes>
          {
            isLoggedIn ?
              <>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/stats' element={<Stats />} />
              </>
              :
              <>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
              </>

          }
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
