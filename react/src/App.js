import MainPage from "./main_page/mainPage";
import NavBar from "./navBar";
import Header from "./header";
import React from "react";
import React, {useEffect} from "react";
import VehicleDetails from "./vehicleDetails/vehicleDetails";
import './App.css';
import Footer from "./footer";
import UserPage from "./user_page/userPage";

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
