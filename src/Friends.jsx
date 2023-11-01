import React from "react";
import Friend from "./Friend";

const Friends = () => {
  const typeOfFriend = "Madrasha";
  const bestFriend = {
    name: "Rony",
    age: 30,
  };
  const friends = ["Jakaria", "Habib", "Hasan"];
  return (
    <div>
      <Friend
        type={typeOfFriend}
        name={bestFriend.name}
        fname={friends[0]}
      ></Friend>
    </div>
  );
};

export default Friends;
