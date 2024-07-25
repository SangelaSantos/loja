import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./components/cart";
import { ConfigProvider } from "antd";
import AddProduct from "./pages/AddProducts";
import ProductList from "./pages/ProductList";
import QRCodePage from "./components/QrCodePage";

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
          <Route path="/product" element={<ProductList/>}></Route>
          <Route path="/qrcode" element={<QRCodePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
