import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/styles.css";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  // Handle Checkout
  const handleProceedToCheckout = () => {
    clearCart();
    navigate("/thank-you"); // Redirect to Thank You Page
  };

  return (
    <div className="cart-container">
      <h2 style={{textAlign:"left"}}>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p style={{ fontSize: "60px" }}>🛒</p>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          {/* Display Total Price */}
          <div className="cart-total">Total: ${totalPrice}</div>

          {/* Cart Buttons */}
          <div className="cart-buttons">
            <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
            <button className="proceed-checkout" onClick={handleProceedToCheckout} style={{color:"white", backgroundColor:"black", hover:"grey"}}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
