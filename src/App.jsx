// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Header from "./components/title/Header";
import Cart from "./components/home/Cart";
import About from "./components/title/About";
import Contact from "./components/title/Contact";
import Footer from "./components/Bottom/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (shoe) => {
    setCart((prevCart) => {
      const existingShoe = prevCart.find((item) => item.id === shoe.id);
      if (existingShoe) {
        return prevCart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...shoe, quantity: 1 }];
      }
    });
    window.confirm("Do you want to add this?");
  };

  const handleRemoveFromCart = (shoeId) => {
    const confirmRemoval = window.confirm("Are you sure you want to remove this item?");
    if (confirmRemoval) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== shoeId));
    }
  };

  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
