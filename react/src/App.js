import MainPage from "./main_page/mainPage";
import Header from "./header";
import React from "react";
import './App.css';


function App() {
  return (
    <div className="App">
        <Header/>
        <div className="inner-div">
            <MainPage/>
        </div>
    </div>
  );
}

export default App;
