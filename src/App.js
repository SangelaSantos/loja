import React from 'react';
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from './ProductList';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<ProductList />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
