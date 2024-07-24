import React from 'react';
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Cart from './components/cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
