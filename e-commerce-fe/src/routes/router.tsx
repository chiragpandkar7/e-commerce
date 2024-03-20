import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Home from "../components/Home";
import Cart from "../components/Cart";

const defaultRoute = <Navigate to="/home" />;

const Router = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={defaultRoute} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Router;
