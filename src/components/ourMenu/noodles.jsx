
import React from "react";
import "./noodles.css";

const noodlesMenu = [
  { name: "Veg Hakka Noodles", price: "₹160", image: "https://i.pinimg.com/736x/e5/53/63/e55363cd63ec1f769a184d8617a832ef.jpg" },
  { name: "Chicken Chow Mein", price: "₹200", image: "https://i.pinimg.com/736x/68/3a/ab/683aab0b53d5314b86a3439da984cd8c.jpg" },
  { name: "Schezwan Noodles", price: "₹180", image: "https://i.pinimg.com/736x/04/64/e2/0464e2ecb1bf1499f7c35354149aab54.jpg" },
  { name: "Singapore Noodles", price: "₹190", image: "https://i.pinimg.com/1200x/a5/4f/26/a54f26494c2d2a6ef18fd4e3c2c8240f.jpg" },
  { name: "Egg Noodles", price: "₹170", image: "https://i.pinimg.com/1200x/96/0b/96/960b96e6b6884e2086803e78ed01900f.jpg" },
  { name: "Paneer Noodles", price: "₹185", image: "https://i.pinimg.com/736x/2b/1a/b5/2b1ab5d4eefb2e61c250e34f9d5dad75.jpg" },
  { name: "Thai Noodles", price: "₹210", image: "https://i.pinimg.com/736x/01/85/6e/01856eb569d504cd49bd1611487bddeb.jpg" },
  { name: "Garlic Noodles", price: "₹175", image: "https://i.pinimg.com/1200x/00/e2/a3/00e2a31302cab8a99a971e20e056419a.jpg" },
  { name: "Chilli Garlic Noodles", price: "₹180", image: "https://i.pinimg.com/1200x/e7/23/07/e72307acfb697124056229912caebc50.jpg" },
  { name: "Mixed Veg Noodles", price: "₹165", image: "https://i.pinimg.com/1200x/5f/b8/04/5fb804a25cdc8dd17a10e9e87d12daa4.jpg" },
  { name: "Mushroom Noodles", price: "₹190", image: "https://i.pinimg.com/736x/a0/cb/94/a0cb94446d577b73d5f30756b258ce97.jpg" },
  { name: "Soy Sauce Noodles", price: "₹170", image: "https://i.pinimg.com/1200x/d9/57/15/d957153657ac636e0eeed5d7ef6dc223.jpg" },
  { name: "Tofu Noodles", price: "₹200", image: "https://i.pinimg.com/1200x/38/db/04/38db047496d5de6baa8210cee5fca532.jpg" },
  { name: "Spicy Korean Noodles", price: "₹220", image: "https://i.pinimg.com/1200x/a0/09/58/a009586c2657fde4a2f54c12ded11102.jpg" },
  { name: "Peanut Butter Noodles", price: "₹210", image: "https://i.pinimg.com/1200x/5c/32/98/5c32985fc7bd9cebac48151a31b48310.jpg" }
];

const NoodlesMenu = () => (
  <div className="noodles-menu-container">
    {noodlesMenu.map((noodle, idx) => (
      <div className="noodles-card" key={idx}>
        <img src={noodle.image} alt={noodle.name} className="noodles-img" />
        <h4 className="noodles-name">{noodle.name}</h4>
        <p className="noodles-price">{noodle.price}</p>
      </div>
    ))}
  </div>
);

export default NoodlesMenu;