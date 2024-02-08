const ClickEvent = () => {
  // regular function
  function alertMessage() {
    alert("This is alert with regular function but outside the render");
  }
  // arrow function
  const showAlertMessge = () => {
    alert("Alert message with arrow function");
  };
  return (
    <div>
      <h2>Click event (Event Handler)</h2>
      <br />
      <button
        onClick={() => {
          alert("This is alert with arrow function");
        }}
      >
        With arrow function
      </button>
      <button
        onClick={function alertMessage() {
          alert("This is alert with regular function");
        }}
      >
        With regular function
      </button>
      <button onClick={alertMessage}>With regular function</button>
      <button onClick={showAlertMessge}>With arrow function</button>
    </div>
  );
};

export default ClickEvent;
