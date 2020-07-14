import React from "react";
import "./App.css";
import Flights from "./containers/Flights";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <h1>Get the price per kilometer. </h1>
      <h2>Travel wisely!</h2>
      <Flights />
      <ToastContainer />
    </div>
  );
}

export default App;
