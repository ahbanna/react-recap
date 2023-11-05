import React from "react";

const SingleInfo = (props) => {
  console.log(props);
  return (
    <div>
      <h3>User name is: {props.userName}</h3>
      <h3>My friend name is: {props.info}</h3>
      <h3>One of my friend name is: {props.friend}</h3>
    </div>
  );
};

export default SingleInfo;
