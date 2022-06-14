import MainPage from "./main_page/mainPage";
import NavBar from "./navBar";
import Header from "./header";
import UserPage from "./user_page/userPage";
import React, {useEffect} from "react";
import './App.css';
import {Route} from "react-router-dom";
import Footer from "./footer";
import VehicleDetails from "./vehicleDetails/vehicleDetails";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="inner-div">
            <NavBar/>
            {/*<MainPage/>*/}
            <UserPage id={0}/>
            {/*<VehicleDetails id={0}/>*/}
            <Footer/>
        </div>
    </div>
  );
}

export default App;
