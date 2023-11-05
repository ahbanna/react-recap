import React, { useState } from "react";
import Dial from "./Dial/Dial";

const ExploreUseState = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    // const nextCount = count + 1;
    // setCount(nextCount);
    setCount(count + 1);
  };

  const decreaseCount = () => {
    // const preCount = count - 1;
    // setCount(preCount);
    setCount(count - 1);
  };

  return (
    <div className="usestate-area">
      <h2>Understanding useState Hook</h2>
      <h3>Count: {count}</h3>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <Dial steps={count}></Dial>
    </div>
  );
};

export default ExploreUseState;
