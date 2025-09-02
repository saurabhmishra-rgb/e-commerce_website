import React from "react";
import "./Rolls.css";

const rolls = [
 
  {
    name: "Paneer Tikka Roll",
    image: "https://i.pinimg.com/736x/4f/18/6a/4f186a2a2144fbab5da57a2fd3e0be9f.jpg"
  },
  {
    name: "Chicken Kathi Roll",
    image: "https://i.pinimg.com/1200x/73/44/2f/73442f2c866a02fc724eddeff4ddc7a5.jpg"
  },
  {
    name: "Veg Frankie Roll",
    image: "https://i.pinimg.com/1200x/5a/c8/0e/5ac80e1eb0e55d6c00820ba50a8d6a6c.jpg"
  },
  {
    name: "Egg Roll",
    image: "https://i.pinimg.com/1200x/11/fd/03/11fd0337a50eda7d10a5f6fc9cbb1820.jpg"
  },
  {
    name: "Mutton Seekh Roll",
    image: "https://i.pinimg.com/736x/df/58/ed/df58ed3cc69f3097ea11cd45fe23ce0b.jpg"
  },
  {
    name: "Aloo Tikki Roll",
    image: "https://i.pinimg.com/736x/3a/4b/00/3a4b00269ded1d4159f7301370a90589.jpg"
  },
  {
    name: "Paneer Bhurji Roll",
    image: "https://i.pinimg.com/1200x/ab/b3/f2/abb3f2e60dbccc3d8dd312c7f9cc212e.jpg"
  },
  {
    name: "Butter Chicken Roll",
    image: "https://i.pinimg.com/1200x/97/19/16/971916375ff99c37a1a1523084ec4215.jpg"
  },
  {
    name: "Cheese Veg Roll",
    image: "https://i.pinimg.com/1200x/72/91/c7/7291c72ca4d37a6845a03ce0783c928a.jpg"
  },
  {
    name: "Keema Roll",
    image: "https://i.pinimg.com/736x/f9/23/e6/f923e653a862ad341a0592d9a531668f.jpg"
  },
  {
    name: "Mushroom Roll",
    image: "https://i.pinimg.com/1200x/d6/a3/ab/d6a3abe646a61544662109fede8c3b35.jpg"
  },
  {
    name: "Spicy Soya Roll",
    image: "https://i.pinimg.com/736x/2b/c7/9f/2bc79f5f251b9ae027147cd65ace6198.jpg"
  },
  {
    name: "Fish Roll",
    image: "https://i.pinimg.com/1200x/49/7c/ea/497ceac0c4df5bd4e59e8bcb84d213ce.jpg"
  },
  {
    name: "Tandoori Veg Roll",
    image: "https://i.pinimg.com/1200x/34/e8/9b/34e89bdf62aced30ce2f5f453bf98793.jpg"
  },
  {
    name: "Double Egg Chicken Roll",
    image: "https://i.pinimg.com/1200x/cb/1e/18/cb1e18c314aeb4763a63b3a474a5ed55.jpg"
  }


];

const Rolls = () => {
  return (
    <div className="rolls-page">
      <h1>Our Delicious Rolls</h1>
      <p className="rolls-intro">
        Explore our wide variety of mouthwatering rolls – veg, non-veg, cheesy, and spicy!
      </p>
      <div className="rolls-grid">
        {rolls.map((roll, index) => (
          <div key={index} className="roll-card">
            <img src={roll.image} alt={roll.name} />
            <h3>{roll.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rolls;
