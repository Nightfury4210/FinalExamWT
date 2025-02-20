import React, { useContext } from "react";  // ✅ Add useContext
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/styles.css";



function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2 className="logo">GUTech Exam Store</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
