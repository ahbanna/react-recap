import React, { useState } from "react";
import Dial from "./Dial/Dial";
import RemoveData from "./RemoveData/RemoveData";
import TodoList from "./TodoList/TodoList";

const ExploreUseState = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  // useState working with immutable object
  const [myObj, setMyObj] = useState({
    key1: "value 1",
    key2: "value 2",
    key3: "value 3",
  });
  const change = () => {
    setMyObj((preObj) => ({
      ...preObj,
      key1: "New value 1",
      key2: "New value 2",
    }));
  };

  return (
    <div className="usestate-area container">
      <h2>Understanding useState Hook</h2>
      <div className="usestate-basic">
        <h3>Count: {count}</h3>
        {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button> */}
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <Dial steps={count}></Dial>
      </div>

      {/* useState working with immutable object */}
      <div>
        <p>{myObj.key1}</p>
        <p>{myObj.key2}</p>
        <button onClick={change}>Click to change</button>
      </div>
      <TodoList></TodoList>
      <RemoveData></RemoveData>
    </div>
  );
};

export default ExploreUseState;
