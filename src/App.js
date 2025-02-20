import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ThankYou from "./components/ThankYou";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import "./styles/styles.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
