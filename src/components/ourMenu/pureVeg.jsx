import React from "react";
import "./pureVeg.css";

const pureVegMenu = [
  { name: "Paneer Butter Masala", price: "₹220", image: "https://i.pinimg.com/736x/75/25/c2/7525c28b815e93b8f4ad4a3bb889090e.jpg" },
  { name: "Dal Makhani", price: "₹180", image: "https://i.pinimg.com/736x/6a/66/b0/6a66b06d6a41670ab021a73eeaf72196.jpg" },
  { name: "Veg Kofta Curry", price: "₹200", image: "https://i.pinimg.com/736x/2b/a6/73/2ba6738d3b44421c02ff909b496420a7.jpg" },
  { name: "Aloo Gobi", price: "₹160", image: "https://i.pinimg.com/1200x/3f/8a/e0/3f8ae022c5f0da71bc41ad181708eaad.jpg" },
  { name: "Chana Masala", price: "₹170", image: "https://i.pinimg.com/736x/26/4b/ad/264bad3e7e9ffe6599c6b35d5f55ded0.jpg" },
  { name: "Mix Veg Curry", price: "₹190", image: "https://i.pinimg.com/1200x/3e/59/39/3e59398cbd1555b64cd67691c0bf6624.jpg" },
  { name: "Bhindi Masala", price: "₹150", image: "https://i.pinimg.com/1200x/c7/ff/36/c7ff36f40dd604971100bf2e9a985115.jpg" },
  { name: "Kadai Paneer", price: "₹210", image: "https://i.pinimg.com/736x/a9/1b/7b/a91b7b0a50f7d507723988541ed18d9d.jpg" },
  { name: "Matar Paneer", price: "₹200", image: "https://i.pinimg.com/1200x/52/b2/bd/52b2bd06293cc5638554f483f1858115.jpg" },
  { name: "Palak Paneer", price: "₹210", image: "https://i.pinimg.com/1200x/c1/e5/8d/c1e58dc5b850ed2a576a325de6339719.jpg" },
  { name: "Veg Jalfrezi", price: "₹180", image: "https://i.pinimg.com/1200x/c4/3c/99/c43c99d1eb5b86f015f62f2f23e03c5a.jpg" },
  { name: "Dum Aloo", price: "₹170", image: "https://i.pinimg.com/736x/01/10/7a/01107a4cb0b2d142f4d100e80f919c22.jpg" },
  { name: "Malai Kofta", price: "₹220", image: "https://i.pinimg.com/1200x/b0/aa/a4/b0aaa4cdf8103e50e74f675f25207332.jpg" },
  { name: "Gatta Curry", price: "₹190", image: "https://i.pinimg.com/736x/de/aa/df/deaadfb91120a036378e061616378948.jpg" },
  { name: "Baingan Bharta", price: "₹160", image: "https://i.pinimg.com/736x/dd/bf/71/ddbf71388ffb7ab33559c9eaa52f1451.jpg" }
];

const PureVegMenu = () => (
  <div className="pureveg-menu-container">
    {pureVegMenu.map((item, idx) => (
      <div className="pureveg-card" key={idx}>
        <img src={item.image} alt={item.name} className="pureveg-img" />
        <h4 className="pureveg-name">{item.name}</h4>
        <p className="pureveg-price">{item.price}</p>
      </div>
    ))}
  </div>
);

export default PureVegMenu;