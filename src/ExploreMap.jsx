import React from "react";

const ExploreMap = () => {
  const foods = ["Pizza", "Burger", "Sushi", "Pasta", "Chocolate"];
  const drinks = [
    { name: "Coca-Cola", company: "The Coca-Cola Company" },
    { name: "Pepsi", company: "PepsiCo, Inc." },
    { name: "Red Bull", company: "Red Bull GmbH" },
    { name: "Starbucks Coffee", company: "Starbucks Corporation" },
    { name: "Sprite", company: "The Coca-Cola Company" },
  ];
  return (
    <div className="explore-map">
      <h1>Understanding MAP</h1>
      <div>
        {foods.map((food) => (
          <h4>Name: {food}</h4>
        ))}
        {foods.map((food) => (
          <MyFoods name={food}></MyFoods>
        ))}
      </div>
      <div>
        {drinks.map((drink) => (
          <div>
            <h4>Name: {drink.name}</h4>
            <p>Company: {drink.company}</p>
          </div>
        ))}
        {drinks.map((drink) => (
          <MyDrinks
            drinksName={drink.name}
            companyName={drink.company}
          ></MyDrinks>
        ))}
      </div>
    </div>
  );
};

function MyFoods(props) {
  return (
    <div>
      <h3>Food Name: {props.name}</h3>
    </div>
  );
}
function MyDrinks(props) {
  return (
    <div>
      <h3>Drinks Name: {props.drinksName}</h3>
      <p>Company name: {props.companyName}</p>
    </div>
  );
}

export default ExploreMap;
