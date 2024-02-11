// Using ternary operator

const ConditionalRendering = () => {
  const status = false;
  return (
    <div>
      <h2>Conditional rendering</h2>;
      {status ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
};

export default ConditionalRendering;

// using if else statement
/*
const LoginStatus = (status) => {
  if (status) {
    return <button>Logout</button>;
  } else {
    return <button>Login</button>;
  }
};

const ConditionalRendering = () => {
  return (
    <div>
      <h2>Conditional rendering</h2>
      {LoginStatus(true)}
    </div>
  );
};

export default ConditionalRendering;
*/

// Using switch case
/*const ConditionalRendering = () => {
  const status = false;

  switch (status) {
    case true:
      return <button>Logout</button>;
    case false:
      return <button>Login</button>;
    default:
      return null;
  }
};

export default ConditionalRendering;
*/

// Using logical &&
/*const status = true;

const ConditionalRendering = () => {
  return <div>{status && <button>Logout</button>}</div>;
};

export default ConditionalRendering;
*/

// Using  immediately invoked function
/*import React from "react";

const ConditionalRendering = () => {
  const status = false;
  return (
    <div>
      {(() => {
        if (status) {
          return <button>Logout</button>;
        } else {
          return <button>Login</button>;
        }
      })()}
    </div>
  );
};

export default ConditionalRendering;
*/
