import React from "react";

const ExploreMap = () => {
  const foods = ["Pizza", "Burger", "Sushi", "Pasta", "Chocolate"];
  return (
    <div className="explore-map">
      <div>
        {foods.map((food) => (
          <h4>Name: {food}</h4>
        ))}
        {foods.map((food, i) => {
          console.log(i);
          return <li key={i}>{food}</li>;
        })}
      </div>
    </div>
  );
};

export default ExploreMap;
