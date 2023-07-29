import React from "react";

const ExploreMap = () => {
  // Array
  const foods = ["Pizza", "Burger", "Sushi", "Pasta", "Chocolate"];
  // Array of objects
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
            <h4>Company: {drink.company}</h4>
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
  console.log(props.name);
  return (
    <div>
      <p>Food Name: {props.name}</p>
    </div>
  );
}
function MyDrinks(props) {
  return (
    <div>
      <p>Drinks Name: {props.drinksName}</p>
      <p>Company name: {props.companyName}</p>
    </div>
  );
}

export default ExploreMap;
