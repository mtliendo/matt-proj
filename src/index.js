import React from "react";
import { render } from "react-dom";

const App = () => {
  return <h1>Welcome to my React app!!!</h1>;
};

const container = document.getElementById("root");

render(<App />, container);
