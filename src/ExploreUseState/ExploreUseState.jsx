import React, { useState } from "react";
import Dial from "./Dial/Dial";
import RemoveData from "./RemoveData/RemoveData";

const ExploreUseState = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  // useState working with immutable object
  const [data, setData] = useState({
    key1: "value 1",
    key2: "value 2",
    key3: "value 3",
  });
  // const change = () => {
  //   setData((preData) => ({
  //     ...data,
  //     key1: "New value 1",
  //     key2: "New value 2",
  //   }));
  // };

  const change = () => {
    setData((preData)=> ({
      ...data,
      key1: "fsdfsfd"
    }))
  }
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
        <p>{data.key1}</p>
        <p>{data.key2}</p>
        <button onClick={change}>Click to change</button>
      </div>

      <RemoveData></RemoveData>
    </div>
  );
};

export default ExploreUseState;
