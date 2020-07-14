import React from "react";
import "./App.css";
import Flights from "./containers/Flights";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Flights />
      <ToastContainer />
    </div>
  );
}

export default App;
