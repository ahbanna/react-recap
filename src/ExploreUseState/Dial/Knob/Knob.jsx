import React from "react";

const Knob = (props) => {
  // const Knob = ({ steps }) => {
  return (
    <div className="knob-area">
      <h3>This is knob component</h3>
      <p>Get count from another component</p>
      <h4>Count: {props.steps}</h4>
      {/* <h4>Count: {steps}</h4> */}
    </div>
  );
};

export default Knob;
