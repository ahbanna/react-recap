import React from "react";

const Friend = (props) => {
  console.log(props);
  return (
    <div>
      <h3>My best frind name is: {props.name}</h3>
      <h4>He is my {props.type} friend</h4>
      <h4>Another friend name is: {props.fname}</h4>
    </div>
  );
};

export default Friend;
