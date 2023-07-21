import "./App.css";
const para2Style = {
  color: "white",
  backgroundColor: "#0384d1",
  padding: "10px",
  textAlign: "center",
};

function App() {
  return (
    <div className="css-style">
      <h1>CSS style added in the following ways</h1>
      <div>
        <h3 className="para-1">Style is added here by using css classes</h3>
      </div>
      <div>
        <h3 style={para2Style}>
          Style is added here by using JavaScript object
        </h3>
      </div>
      <div>
        <h3
          style={{
            color: "white",
            backgroundColor: "#362160",
            padding: "10px",
            textAlign: "center",
          }}
        >
          Style is added here by using inline css
        </h3>
      </div>
    </div>
  );
}

export default App;
