import MainPage from "./main_page/mainPage";
import NavBar from "./navBar";
import Header from "./header";
import React, {useEffect} from "react";
import './App.css';
import Footer from "./footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="inner-div">
            <NavBar/>
            <MainPage/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
