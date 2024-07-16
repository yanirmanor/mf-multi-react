import React from "react";
import ReactDOM from "react-dom";

import DemoComp from "./DemoComp";
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: remote</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <DemoComp />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
