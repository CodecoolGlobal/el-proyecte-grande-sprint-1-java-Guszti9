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
            {/*<UserPage/>*/}
            {/*<VehicleDetails id={0}/>*/}
        </div>
    </div>
  );
}

export default App;
