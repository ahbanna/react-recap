// Create react element using jsx
import React from "react";

const UnderstandingJSX = () => {
  return (
    <div>
      <h4 className="main-heading">Hello world with jsx</h4>
    </div>
  );
};

export default UnderstandingJSX;

// create react elememt using createElement
/*import React from "react";
const HelloWorld = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h4",
      { className: "main-heading" },
      "Hello World without jsx"
    )
  );
};
export default HelloWorld;
*/
// Note: This is so complex but Both gives the same output.that's why we use jsx. when we use jsx, untimately Bable convert the first code (using jsx) to the code just like above.
