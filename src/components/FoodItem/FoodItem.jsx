import React from "react";
import "./FoodItem.css";

const foodList = [
  { id: 1, name: "Greek Salad", image: "food_1.png", price: 12 },
  { id: 2, name: "Veg Salad", image: "food_2.png", price: 18 },
  { id: 3, name: "Clover Salad", image: "food_3.png", price: 16 },
  { id: 4, name: "Chicken Salad", image: "food_4.png", price: 24 },
  { id: 5, name: "Lasagna Rolls", image: "food_5.png", price: 14 },
  { id: 6, name: "Peri Peri Rolls", image: "food_6.png", price: 20 },
  { id: 7, name: "Chicken Rolls", image: "food_7.png", price: 22 },
  { id: 8, name: "Veg Rolls", image: "food_8.png", price: 12 },
  { id: 9, name: "Ripple Ice Cream", image: "food_9.png", price: 14 },
  { id: 10, name: "Fruit Ice Cream", image: "food_10.png", price: 22 },
  { id: 11, name: "Jar Ice Cream", image: "food_11.png", price: 10 },
  { id: 12, name: "Vanilla Ice Cream", image: "food_12.png", price: 12 },
  { id: 13, name: "Chicken Sandwich", image: "food_13.png", price: 12 },
  { id: 14, name: "Vegan Sandwich", image: "food_14.png", price: 18 },
  { id: 15, name: "Grilled Sandwich", image: "food_15.png", price: 16 },
  { id: 16, name: "Bread Sandwich", image: "food_16.png", price: 24 },
  { id: 17, name: "Cup Cake", image: "food_17.png", price: 14 },
  { id: 18, name: "Vegan Cake", image: "food_18.png", price: 20 },
  { id: 19, name: "Butterscotch Cake", image: "food_19.png", price: 22 },
  { id: 20, name: "Sliced Cake", image: "food_20.png", price: 12 },
  { id: 21, name: "Garlic Mushroom", image: "food_21.png", price: 14 },
  { id: 22, name: "Fried Cauliflower", image: "food_22.png", price: 22 },
  { id: 23, name: "Mix Veg Pulao", image: "food_23.png", price: 10 },
  { id: 24, name: "Rice Zucchini", image: "food_24.png", price: 12 },
  { id: 25, name: "Cheese Pasta", image: "food_25.png", price: 12 },
  { id: 26, name: "Tomato Pasta", image: "food_26.png", price: 18 },
  { id: 27, name: "Creamy Pasta", image: "food_27.png", price: 16 },
  { id: 28, name: "Chicken Pasta", image: "food_28.png", price: 24 },
  { id: 29, name: "Buttter Noodles", image: "food_29.png", price: 14 },
  { id: 30, name: "Veg Noodles", image: "food_30.png", price: 20 },
  { id: 31, name: "Somen Noodles", image: "food_31.png", price: 22 },
  { id: 32, name: "Cooked Noodles", image: "food_32.png", price: 12 }
];

const FoodMenu = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Food Menu</h2>
      <br />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "15px"
      }}>
        {foodList.map((item) => (
          <div className='food-card' key={item.id} style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
            textAlign: "center"
          }}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "6px", cursor: "pointer",  }}
            />
            <h3 >{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
