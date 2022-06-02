import MainPage from "./mainPage";
import NavBar from "./navBar";
import Header from "./header";
import React from "react";
import './App.css';
import Footer from "./footer";
import UserPage from "./user_page/userPage";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="inner-div">
            <NavBar/>
            {/*<MainPage/>*/}
            <UserPage/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
