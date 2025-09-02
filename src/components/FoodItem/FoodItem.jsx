import React from "react";
import './FoodItem.css';
import foodImage1 from "../../assets/food_1.png";
import foodImage2 from "../../assets/food_2.png";
import foodImage3 from "../../assets/food_3.png";
import foodImage4 from "../../assets/food_4.png";

import foodImage5 from "../../assets/food_6.png";
import foodImage6 from "../../assets/food_7.png";
import foodImage7 from "../../assets/food_8.png";
import foodImage8 from "../../assets/food_9.png";
import foodImage9 from "../../assets/food_10.png";
import foodImage10 from "../../assets/food_11.png";
import foodImage11 from "../../assets/food_12.png";
import foodImage12 from "../../assets/food_13.png";
import foodImage13 from "../../assets/food_14.png";
import foodImage14 from "../../assets/food_15.png";
import foodImage15 from "../../assets/food_15.png";
import foodImage16 from "../../assets/food_16.png";
import foodImage17 from "../../assets/food_17.png";
import foodImage18 from "../../assets/food_18.png";
import foodImage19 from "../../assets/food_19.png";
import foodImage20 from "../../assets/food_20.png";
import foodImage21 from "../../assets/food_21.png";
import foodImage22 from "../../assets/food_22.png";
import foodImage23 from "../../assets/food_23.png";
import foodImage24 from "../../assets/food_24.png";
import foodImage25 from "../../assets/food_25.png";
import foodImage26 from "../../assets/food_26.png";
import foodImage27 from "../../assets/food_27.png";
import foodImage28 from "../../assets/food_28.png";
import foodImage29 from "../../assets/food_29.png";
import foodImage30 from "../../assets/food_30.png";
import foodImage31 from "../../assets/food_31.png";
import foodImage32 from "../../assets/food_32.png";

const foodList = [
  { id: 1, name: "Greek Salad", image: foodImage1, price: 12 },
  { id: 2, name: "Veg Salad", image: foodImage2, price: 18 },
  { id: 3, name: "Clover Salad", image: foodImage3, price: 16 },
  { id: 4, name: "Chicken Salad", image: foodImage4, price: 24 },
  { id: 5, name: "Lasagna Rolls", image: foodImage5, price: 14 },
  { id: 6, name: "Peri Peri Rolls", image: foodImage6, price: 20 },
  { id: 7, name: "Chicken Rolls", image: foodImage7, price: 22 },
  { id: 8, name: "Veg Rolls", image: foodImage8, price: 12 },
  { id: 9, name: "Ripple Ice Cream", image: foodImage9, price: 14 },
  { id: 10, name: "Fruit Ice Cream", image: foodImage10, price: 22 },
  { id: 11, name: "Jar Ice Cream", image: foodImage11, price: 10 },
  { id: 12, name: "Vanilla Ice Cream", image: foodImage12, price: 12 },
  { id: 13, name: "Chicken Sandwich", image: foodImage13, price: 12 },
  { id: 14, name: "Vegan Sandwich", image: foodImage14, price: 18 },
  { id: 15, name: "Grilled Sandwich", image: foodImage15, price: 16 },
  { id: 16, name: "Bread Sandwich", image: foodImage16, price: 24 },
  { id: 17, name: "Cup Cake", image: foodImage17, price: 14 },
  { id: 18, name: "Vegan Cake", image: foodImage18, price: 20 },
  { id: 19, name: "Butterscotch Cake", image: foodImage19, price: 22 },
  { id: 20, name: "Sliced Cake", image: foodImage20, price: 12 },
  { id: 21, name: "Garlic Mushroom", image: foodImage21, price: 14 },
  { id: 22, name: "Fried Cauliflower", image: foodImage22, price: 22 },
  { id: 23, name: "Mix Veg Pulao", image: foodImage23, price: 10 },
  { id: 24, name: "Rice Zucchini", image: foodImage24, price: 12 },
  { id: 25, name: "Cheese Pasta", image: foodImage25, price: 12 },
  { id: 26, name: "Tomato Pasta", image: foodImage26, price: 18 },
  { id: 27, name: "Creamy Pasta", image: foodImage27, price: 16 },
  { id: 28, name: "Chicken Pasta", image: foodImage28, price: 24 },
  { id: 29, name: "Buttter Noodles", image: foodImage29, price: 14 },
  { id: 30, name: "Veg Noodles", image: foodImage30, price: 20 },
  { id: 31, name: "Somen Noodles", image: foodImage31, price: 22 },
  { id: 32, name: "Cooked Noodles", image: foodImage32, price: 12 }
];

const FoodMenu = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Food Menu</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "15px"
      }}>
        {foodList.map((item) => (
          <div className='Medusa' key={item.id} style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
            textAlign: "center",
            cursor: "pointer",
            
          }}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "6px" }}
            />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;



