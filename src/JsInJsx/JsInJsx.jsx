import React from "react";

const JsInJsx = () => {
  const myName = "Banna";
  const info = {
    name: "Banna",
    age: 20,
  };
  const friends = ["Kamal", "jamal", "Habib"];
  return (
    <div>
      <h2>Javascript code inside JSx</h2>
      <h4>My name is: {myName}</h4>
      <h4>Name: {info.name}</h4>
      <p>Age: {info.age}</p>
      <h4>My friends name are: {friends[0]}</h4>
    </div>
  );
};

export default JsInJsx;
