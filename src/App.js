import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PromoBar from './components/PromoBar';
import Products from './pages/Products';



function App() {
  return (
    <>
      <PromoBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/products" component={Products} />


      </Routes>      
      <Footer />
    </>
  );
}

export default App;