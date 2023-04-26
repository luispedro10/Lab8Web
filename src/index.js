import React from "react";
import ReactDOM from "react-dom";
import StartApp from "./components/startApp";
import "font-awesome/css/font-awesome.css";


const StartComponent = () => {
  return <h1> New React APP</h1>;
};

ReactDOM.render(<StartApp />, document.getElementById("root"));