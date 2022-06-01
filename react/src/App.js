import MainPage from "./mainPage";
import NavBar from "./navBar";
import Header from "./header";
import React, {useEffect} from "react";
import VehicleDetails from "./vehicleDetails/vehicleDetails";
import './App.css';
import Footer from "./footer";
import UserPage from "./userPage";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="inner-div">
            <NavBar/>
            <VehicleDetails id={1}/>
        </div>
    </div>
  );
}

export default App;
