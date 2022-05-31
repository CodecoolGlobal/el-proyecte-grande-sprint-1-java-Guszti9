import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import VehicleDetails from "./vehicleDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <VehicleDetails id={1}/>
    </div>
  );
}

export default App;
