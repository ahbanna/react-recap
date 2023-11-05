// Passing data from one component to another component. Dynamic props (variable, array, object, destructing props)
import React from "react";
import SingleInfo from "./SingleInfo";

const PropsExplore = () => {
  // pass variable
  const name = "Banna";
  // pass object
  const userInfo = {
    name: "Ariful",
    age: "30",
  };
  // pass array
  const friends = ["Raju", "Rony", "Asad"];
  return (
    <div>
      <h2>Props Explore</h2>
      <SingleInfo
        userName={name}
        info={userInfo.name}
        friend={friends[0]}
      ></SingleInfo>
    </div>
  );
};

export default PropsExplore;
