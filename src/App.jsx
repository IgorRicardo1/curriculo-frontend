import React from 'react';
import Login from './Login';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portifolio from './Portifolio';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route 
      path ="/" 
      element={<Portifolio/>}
      />
      <Route
        path='/login'
        element={<Login />}
      />
      </Routes>
    </BrowserRouter>

  )
}

export default App;