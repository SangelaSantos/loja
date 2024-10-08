import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart";
import { ConfigProvider } from "antd";
import AddProduct from "./pages/AddProducts";
import QRCodePage from "./components/QrCodePage";
import HomePage from "./pages/HomePage";
import Products from "./components/store/Products";

function App() {
  return (
    <ConfigProvider theme={{token:{colorPrimary: "#272727"}}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/add" element={<AddProduct/>}></Route>
          <Route path="/qrcode" element={<QRCodePage/>}></Route>
          <Route path="/produtos" element={<Products/>}></Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
