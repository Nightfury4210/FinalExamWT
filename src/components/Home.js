import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const products = [
  { id: 1, name: "Minimal Desk Lamp", price: 89.99, image: "https://www.depuley.com/cdn/shop/products/dllt-nordic-minimalist-desk-lamp-modern-nightstand-lamp-with-plug-in-cord-industrial-table-lamp-with-adjustable-angle-5w-led-warm-light-desk-lamp-for-study-offi-733791.jpg?v=1677838951" },
  { id: 2, name: "Ceramic Coffee Mug", price: 24.99, image: "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/c55d2d24-5e65-40fc-80d8-7cdd6e6643bb._SL480_.jpg" },
  { id: 3, name: "Leather Notebook", price: 34.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVw21_83-t84B1HQgAgpHeNI_EAb-Z19fULQ&s" },
  { id: 4, name: "Bamboo Plant Stand", price: 49.99, image: "https://i.ebayimg.com/images/g/CFEAAOSwGQRdebzM/s-l1200.jpg" },
  { id: 5, name: "Abstract Wall Art", price: 129.99, image: "https://primedecor.pk/cdn/shop/products/ColorfulBrushStrokePatches_3Panel_AbstractWallArt.jpg?v=1658150042" },
  { id: 6, name: "Geometric Bookends", price: 39.99, image: "https://modernquests.com/cdn/shop/files/esq-living-hollow-blocks-metal-bookends-set-of-2-black-1.jpg?v=1716723334&width=2048" },
];

function Home() {
  const { addToCart } = useContext(CartContext);
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };

  return (
    <div className="container">
      
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>

            {/* Buttons Section */}
            <div className="product-actions">
              <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
              
              {/* Heart Like Button */}
              <button className="like-btn" onClick={() => toggleLike(product.id)}>
                {liked[product.id] ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;
