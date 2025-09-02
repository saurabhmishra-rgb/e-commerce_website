import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const ExploreMenu = ({ category, setCategory }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.menu_name === "Salad") {
      navigate("/salad"); // redirect to Salad page
    } else if (item.menu_name === "Rolls") {
      navigate("/rolls"); // redirect to Rolls page
    } else if (item.menu_name === "Deserts") {
      navigate("/desserts"); // redirect to Desserts page
    } else if (item.menu_name === "Cake") {
      navigate("/cakes"); // redirect to Cakes page
    } else if (item.menu_name === "Sandwich") {
      navigate("/sandwitch"); // redirect to Sandwich page
    } else if (item.menu_name === "Pure Veg") {
      navigate("/pure-veg"); // redirect to Pure Veg page
    } else if (item.menu_name === "Pasta") {
      navigate("/pasta"); // redirect to Pasta page
    } else if (item.menu_name === "Noodles") {
      navigate("/noodles"); // redirect to Noodles page
    } else {
      setCategory((prev) =>
        prev === item.menu_name ? "All" : item.menu_name
      );
    }
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
        numquam quia facere recusandae aliquam.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => handleClick(item)}
            key={index}
            className="explore-menu-list-item"
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
