import React from "react";
import SingleStd from "./SingleStd";
// get data from stdData.js file
import stdData from "../../stdData";

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
  // Array of objects
  const stdInfo = [
    {
      id: 1,
      stdName: "Hasan",
      stdClass: "nine",
      stdRoll: 5,
    },
    {
      id: 2,
      stdName: "Kamal",
      stdClass: "seven",
      stdRoll: 2,
    },
    {
      id: 3,
      stdName: "Jamal",
      stdClass: "five",
      stdRoll: 1,
    },
  ];
  return (
    <div className="explore-map">
      <h2>Explore MAP</h2>
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
      <div className="all-std">
        {stdInfo.map((item, index) => (
          <SingleStd info={item} key={item.id}></SingleStd>
          // <SingleStd info={item} key={index}></SingleStd>
          //Method 2,
          // <SingleStd {...item} key={index}></SingleStd>
        ))}

        {/*  Get data from stdData.js file*/}
        {/* {stdData.map((item) => (
          <SingleStd info={item} key={item.id}></SingleStd>
        ))} */}
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
