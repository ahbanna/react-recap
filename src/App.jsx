import "./App.css";
import ExploreMap from "./ExploreMap/ExploreMap";
// import ExploreProps from "./ExploreProps";
import ExploreUseEffect from "./ExploreUseEffect";
import ExploreUseState from "./ExploreUseState/ExploreUseState";
// import Friends from "./Friends";
import JsInJsx from "./JsInJsx/JsInJsx";
import PropsExplore from "./PropsExplore/PropsExplore";
import "bootstrap/dist/css/bootstrap.min.css";
import UnderstandingJSX from "./UnderstandingJSX/UnderstandingJSX";
import ExploreUseRef from "./ExploreUseRef/ExploreUseRef";
import Function from "./Function/Function";
import ConditionalRendering from "./ConditionalRendering";
import ClickEvent from "./ClickEvent/ClickEvent";
import UserForm from "./UserForm/UserForm";
const para2Style = {
  color: "white",
  backgroundColor: "#0384d1",
  padding: "10px",
  textAlign: "center",
};

function App() {
  return (
    <div className="text-center">
      {/* CSS style  */}
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
      {/* Explore props */}
      {/* <ExploreProps></ExploreProps> */}
      <PropsExplore></PropsExplore>
      {/* <Friends></Friends> */}
      {/* Explore MAP */}
      <ExploreMap></ExploreMap>
      {/* Explore useState */}
      <ExploreUseState></ExploreUseState>
      {/* Explore useEffect to load user */}
      <ExploreUseEffect></ExploreUseEffect>
      <ExploreUseRef></ExploreUseRef>
      <JsInJsx></JsInJsx>
      <UnderstandingJSX></UnderstandingJSX>
      <Function></Function>
      <ConditionalRendering></ConditionalRendering>
      <ClickEvent></ClickEvent>
      <UserForm></UserForm>
    </div>
  );
}

export default App;
