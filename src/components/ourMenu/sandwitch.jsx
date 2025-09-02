import React from "react";
import "./sandwitch.css";

const sandwichMenu = [
  { name: "Grilled Cheese", price: "₹120", image: "https://i.pinimg.com/736x/12/a3/5c/12a35c0bdcc4daa87c59c947a6a32a5d.jpg" },
  { name: "Veg Club Sandwich", price: "₹150", image: "https://i.pinimg.com/1200x/0d/c0/45/0dc04550524f35814cf5e3ba1e02ef5f.jpg" },
  { name: "Paneer Tikka Sandwich", price: "₹170", image: "https://i.pinimg.com/736x/1f/46/12/1f4612d642f952e2af0e265da1170a8a.jpg" },
  { name: "Corn & Cheese Sandwich", price: "₹140", image: "https://i.pinimg.com/1200x/a0/08/7e/a0087efd1fec61210b41e50abbd6ca09.jpg" },
  { name: "Chicken Mayo Sandwich", price: "₹180", image: "https://i.pinimg.com/1200x/0d/5d/22/0d5d22654674651d50e4de3f5e1b2c96.jpg" },
  { name: "Egg Salad Sandwich", price: "₹160", image: "https://i.pinimg.com/736x/91/38/fc/9138fcb4ed22ec4c60926dc0a9278f76.jpg" },
  { name: "BLT Sandwich", price: "₹200", image: "https://i.pinimg.com/1200x/f6/0b/73/f60b736998cc9382625dbe492f04b5c2.jpg" },
  { name: "Tuna Sandwich", price: "₹190", image: "https://i.pinimg.com/1200x/25/f4/e3/25f4e3a450f0e4ef9a1f545c96ce7078.jpg" },
  { name: "Veggie Delight", price: "₹130", image: "https://i.pinimg.com/736x/38/ed/cb/38edcb2cfda7d7be3421e42c4fe1d618.jpg" },
  { name: "Italian Sub", price: "₹210", image: "https://i.pinimg.com/1200x/0e/91/61/0e9161e9bde7ce0d5261d4dba7013b47.jpg" },
  { name: "Ham & Cheese Sandwich", price: "₹170", image: "https://i.pinimg.com/736x/f8/82/8e/f8828e68483d5db8384de415b707d0ec.jpg" },
  { name: "Avocado Sandwich", price: "₹160", image: "https://i.pinimg.com/1200x/ee/63/73/ee6373c22048b1a2764d90df141c5c9e.jpg" },
  { name: "Turkey Sandwich", price: "₹220", image: "https://i.pinimg.com/1200x/53/f2/95/53f295aab6aab4cb9bad15e6bf9b3776.jpg" },
  { name: "Spicy Mexican Sandwich", price: "₹180", image: "https://i.pinimg.com/736x/6f/11/d2/6f11d2f8644445bee7e9bc986d2738e9.jpg" },
  { name: "Cheese & Tomato Sandwich", price: "₹125", image: "https://i.pinimg.com/1200x/a5/98/7e/a5987e29a6e86a43f35f424db9bca1ab.jpg" }
];

const SandwichMenu = () => (
  <div className="sandwich-menu-container">
    {sandwichMenu.map((sandwich, idx) => (
      <div className="sandwich-card" key={idx}>
        <img src={sandwich.image} alt={sandwich.name} className="sandwich-img" />
        <h4 className="sandwich-name">{sandwich.name}</h4>
        <p className="sandwich-price">{sandwich.price}</p>
      </div>
    ))}
  </div>
);

export default SandwichMenu;