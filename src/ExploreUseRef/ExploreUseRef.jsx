import React, { useEffect, useRef } from "react";

const ExploreUseRef = () => {
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef.current); // <input type="text" placeholder="Enter name" />
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h2>useRef Example</h2>
      <br />
      <input type="text" ref={inputRef} placeholder="Enter name" />
      <input type="email" placeholder="Enter email" />
    </div>
  );
};

export default ExploreUseRef;
