import React from "react";

const SingleInfo = (props) => {
  console.log(props);
  const { name, age } = props.allInfo;
  return (
    <div>
      <h3>User name is: {props.userName}</h3>
      <h3>My friend name is: {props.info}</h3>
      <p>
        {props.allInfo.name} age is {props.allInfo.age}
      </p>
      <p>
        The age of {name} is {age}
      </p>
      <h3>One of my friend name is: {props.friend}</h3>
      <button onClick={props.alertMessage}>Click to see alert</button>
      <p>{props.title}</p>
      <p>{props.des}</p>
    </div>
  );
};

export default SingleInfo;
