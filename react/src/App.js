import MainPage from "./mainPage";
import NavBar from "./navBar";
import Header from "./header";
import React, {useEffect} from "react";
import './App.css';
import Footer from "./footer";
import UserPage from "./userPage";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="inner-div">
            <NavBar/>
            <MainPage/>
        </div>
    </div>
  );
}

export default App;
