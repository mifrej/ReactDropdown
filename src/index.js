import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "./dropdown";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="dropdownRow">
        <Dropdown label={"Dropdown 1"} />
        <Dropdown label={"Dropdown 2"} />
        <Dropdown label={"Dropdown 3"} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
