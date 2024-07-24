import React from 'react';
import Register2 from './Register2';
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register2 />}></Route>
          <Route path="/teste" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
