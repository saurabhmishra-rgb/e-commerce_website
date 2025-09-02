import React from "react";
import "./pasta.css";

const pastaMenu = [
  { name: "Classic Alfredo Pasta", price: "₹220", image: "https://i.pinimg.com/736x/52/73/9a/52739a3877e633b3693588c8cc8fd767.jpg" },
  { name: "Penne Arrabbiata", price: "₹200", image: "https://i.pinimg.com/736x/25/94/92/2594928b6f79c9f83ef68edce7b4fd93.jpg" },
  { name: "Spaghetti Aglio e Olio", price: "₹210", image: "https://i.pinimg.com/736x/18/16/33/18163362721d7afb57c76f21b4a7ac5f.jpg" },
  { name: "Cheesy Macaroni", price: "₹190", image: "https://i.pinimg.com/1200x/6a/f7/9d/6af79d1d837703ed5e2fdf70f9749196.jpg" },
  { name: "Pesto Pasta", price: "₹230", image: "https://i.pinimg.com/1200x/d1/81/c2/d181c22b683e73fd5bc2b48d80bf6ef7.jpg" },
  { name: "Lasagna", price: "₹250", image: "https://i.pinimg.com/736x/b7/32/84/b732847d2b6dba5ec3f7a43199704574.jpg" },
  { name: "Veggie Fusilli", price: "₹200", image: "https://i.pinimg.com/1200x/63/65/f8/6365f88660ed20b86e8b12498fcd4b3a.jpg" },
  { name: "Mushroom Pasta", price: "₹210", image: "https://i.pinimg.com/1200x/4e/3f/f8/4e3ff8e29ce9b73d269fa76485f35fef.jpg" },
  { name: "Spinach Ravioli", price: "₹240", image: "https://i.pinimg.com/736x/d1/d5/91/d1d591b3e17ebf279da8aeb5f7f972d8.jpg" },
  { name: "Chicken Penne", price: "₹260", image: "https://i.pinimg.com/1200x/37/cf/c9/37cfc91e8e658b8914d9ae2205473f4d.jpg" },
  { name: "Tomato Basil Pasta", price: "₹200", image: "https://i.pinimg.com/736x/37/ac/77/37ac77cd977aa7f64c2e7e456a92ab67.jpg" },
  { name: "Four Cheese Pasta", price: "₹250", image: "https://i.pinimg.com/736x/6b/50/e3/6b50e3595ef59a6cfab590a310f51a44.jpg" },
  { name: "Seafood Linguine", price: "₹270", image: "https://i.pinimg.com/736x/27/75/3d/27753d649308a0891f08107b2d353431.jpg" },
  { name: "Broccoli Pasta", price: "₹210", image: "https://i.pinimg.com/736x/90/55/4b/90554b573549bd673118f22d8855aa10.jpg" },
  { name: "Arrabbiata Farfalle", price: "₹220", image: "https://i.pinimg.com/736x/04/90/d8/0490d8958deaa23ac29afdd38f7692a5.jpg" }
];

const PastaMenu = () => (
  <div className="pasta-menu-container">
    {pastaMenu.map((pasta, idx) => (
      <div className="pasta-card" key={idx}>
        <img src={pasta.image} alt={pasta.name} className="pasta-img" />
        <h4 className="pasta-name">{pasta.name}</h4>
        <p className="pasta-price">{pasta.price}</p>
      </div>
    ))}
  </div>
);

export default PastaMenu;