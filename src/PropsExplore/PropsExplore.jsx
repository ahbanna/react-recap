// Passing data from one component to another component. Dynamic props (variable, array, object, destructing props)
import React from "react";
import SingleInfo from "./SingleInfo";

const PropsExplore = () => {
  // variable
  const name = "Banna";
  // object
  const userInfo = {
    name: "Ariful",
    age: "30",
  };
  // array
  const friends = ["Raju", "Rony", "Asad"];
  // functin
  const alertFunction = () => {
    alert("Hello");
  };
  return (
    <div>
      <h2>Props Explore</h2>
      <SingleInfo
        userName={name}
        info={userInfo.name}
        allInfo={userInfo}
        friend={friends[0]}
        alertMessage={alertFunction}
        title="This is title"
        des="This is description"
      ></SingleInfo>
    </div>
  );
};

export default PropsExplore;
