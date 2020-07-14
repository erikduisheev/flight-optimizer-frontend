import React from "react";
import "./App.css";
import Flights from "./containers/Flights";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="Section">
      <h1 className="Headers">Get the price per kilometer.</h1>
      <h1 className="Headers">Travel wisely!</h1>
      <Flights />
      <ToastContainer />
    </div>
  );
}

export default App;
