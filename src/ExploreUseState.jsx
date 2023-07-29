import React, { useState } from "react";

const ExploreUseState = () => {
  return (
    <div>
      <h2>Use of useState</h2>
      <Counter></Counter>
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default ExploreUseState;
