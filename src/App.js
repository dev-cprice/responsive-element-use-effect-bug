import React from "react";
import Base from "terra-base";
import "./App.css";
import Uncontrolled from "./Uncontrolled";
import Controlled from "./Controlled";

function App() {
  return (
    <Base locale="en">
      <Uncontrolled />
      <Controlled />
    </Base>
  );
}

export default App;
