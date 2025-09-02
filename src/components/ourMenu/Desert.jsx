import React from "react";
import "./Desert.css";

const dessertsWithImgs = [
  {
    name: "Chocolate Lava Cake",
    image: "https://i.pinimg.com/736x/d6/11/af/d611af5c56fd5471b1494c683b7a3a90.jpg"
  },
  {
    name: "Gulab Jamun",
    image: "https://i.pinimg.com/1200x/98/cd/33/98cd33b6419d4a4c3426acf24fcb398c.jpg"
  },
  {
    name: "Rasmalai",
    image: "https://i.pinimg.com/1200x/38/a9/50/38a9500403d538d3ca9024ab9d546e95.jpg"
  },
  {
    name: "Cheesecake",
    image: "https://i.pinimg.com/736x/e6/ba/de/e6badede0a363aed887cb7de3aaba654.jpg"
  },
  {
    name: "Brownie Sundae",
    image: "https://i.pinimg.com/1200x/45/7c/ea/457cead4556045af900a7a12ac2eca98.jpg"
  },
  {
    name: "Tiramisu",
    image: "https://i.pinimg.com/1200x/2f/b6/71/2fb67138b316d0b25f09a36a65b9deee.jpg"
  },
  {
    name: "Ice Cream Sundae",
    image: "https://i.pinimg.com/736x/39/fa/26/39fa261a1f7dc0b61c3a6545bd421842.jpg"
  },
  {
    name: "Fruit Tart",
    image: "https://i.pinimg.com/736x/fa/53/91/fa5391ff4fa8ea352730bf96f418bc4b.jpg"
  },
  {
    name: "Red Velvet Cake",
    image: "https://i.pinimg.com/736x/39/79/d0/3979d02efb7859039b06c14afb52f8ea.jpg"
  },
  {
    name: "Macarons",
    image: "https://i.pinimg.com/736x/69/77/de/6977de5c875ae58b080bbd69c8bf8102.jpg"
  },
  {
    name: "Donuts",
    image:"https://i.pinimg.com/736x/f3/c0/d7/f3c0d717bfad83233c7c4e4b5d430a56.jpg"
  },
  {
    name: "Carrot Cake",
    image: "https://i.pinimg.com/1200x/89/b6/3a/89b63a78ef1ee54de470b8e51a983bab.jpg"
  },
  {
    name: "Kulfi",
    image: "https://i.pinimg.com/736x/b5/a3/5a/b5a35aa8f67632a7ac84603db12d3575.jpg"
  },
  {
    name: "Strawberry Mousse",
    image: "https://i.pinimg.com/1200x/06/1e/e3/061ee37239c01d80310047eada201a42.jpg"
  },
  {
    name: "Apple Pie",
    image: "https://i.pinimg.com/1200x/c1/70/1f/c1701fb98854426eb008f81c40783dc3.jpg"
  }
];

const DessertsGallery = () => (
  <div className="desserts-container">
    {dessertsWithImgs.map((dessert, idx) => (
      <div className="dessert-card" key={idx}>
        <img src={dessert.image} alt={dessert.name} className="dessert-img" />
        <h4 className="dessert-name">{dessert.name}</h4>
      </div>
    ))}
  </div>
);

export default DessertsGallery;
