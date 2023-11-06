import React from "react";
import Knob from "./Knob/Knob";

const Dial = (props) => {
  return (
    <div className="dial-area">
      <h3>This is dial component</h3>
      <p>Get count from another component</p>
      <h4>Count: {props.steps}</h4>
      <Knob steps={props.steps}></Knob>
    </div>
  );
};

export default Dial;
