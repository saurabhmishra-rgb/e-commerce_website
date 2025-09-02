import React from "react";
import "./cake.css";

const cakesMenu = [
  { name: "Chocolate Truffle Cake", price: "₹450", image: "https://i.pinimg.com/736x/bb/af/99/bbaf997c4e80db0349e833712ea4519e.jpg" },
  { name: "Black Forest Cake", price: "₹400", image: "https://i.pinimg.com/736x/27/49/24/27492405895303ff34b246039dd4c2f6.jpg" },
  { name: "Red Velvet Cake", price: "₹500", image: "https://i.pinimg.com/1200x/ad/9d/17/ad9d179d29a1c33978878e544f5f9b1f.jpg" },
  { name: "Pineapple Cake", price: "₹350", image: "https://i.pinimg.com/736x/c1/40/a9/c140a9acf3de42ee4c7e5876e2c6871f.jpg" },
  { name: "Butterscotch Cake", price: "₹420", image:"https://i.pinimg.com/736x/9e/8d/d6/9e8dd661f921e97b7f5f2d0a4cc48717.jpg" },
  { name: "Strawberry Cake", price: "₹430", image: "https://i.pinimg.com/1200x/ad/9d/17/ad9d179d29a1c33978878e544f5f9b1f.jpg" },
  { name: "Coffee Walnut Cake", price: "₹480", image: "https://i.pinimg.com/1200x/12/a4/5f/12a45f0548f76df899b8805701a3d24c.jpg" },
  { name: "Blueberry Cake", price: "₹470", image: "https://i.pinimg.com/736x/48/86/2a/48862af10ca565788f9730bf8390f613.jpg" },
  { name: "Mango Cake", price: "₹410", image: "https://i.pinimg.com/1200x/e1/16/96/e11696aff12338aa1518cc0049da320a.jpg" },
  { name: "Vanilla Cake", price: "₹340", image: "https://i.pinimg.com/1200x/4a/eb/3e/4aeb3e41056bf014e0c9cf546a342848.jpg" },
  { name: "Caramel Cake", price: "₹460", image: "https://i.pinimg.com/736x/7b/7a/a9/7b7aa9b6cfafca76adba82edfed1b49d.jpg" },
  { name: "Oreo Cake", price: "₹490", image: "https://i.pinimg.com/1200x/7b/48/9d/7b489d30c4509ee2331adc360c628939.jpg" },
  { name: "Hazelnut Cake", price: "₹520", image: "https://i.pinimg.com/1200x/a6/e0/ba/a6e0ba9ac750936738fbf767ae3265cc.jpg" },
  { name: "Fruit Cake", price: "₹380", image: "https://i.pinimg.com/1200x/79/14/07/7914070f6d5773064dd49c9e277f4894.jpg" },
  { name: "Almond Cake", price: "₹530", image: "https://i.pinimg.com/1200x/79/14/07/7914070f6d5773064dd49c9e277f4894.jpg" }
];

const CakeMenu = () => (
  <div className="cake-menu-container">
    {cakesMenu.map((cake, idx) => (
      <div className="cake-card" key={idx}>
        <img src={cake.image} alt={cake.name} className="cake-img" />
        <h4 className="cake-name">{cake.name}</h4>
        <p className="cake-price">{cake.price}</p>
      </div>
    ))}
  </div>
);

export default CakeMenu;