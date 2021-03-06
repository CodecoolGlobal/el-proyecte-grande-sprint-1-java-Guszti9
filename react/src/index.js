import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import VehicleDetails from "./vehicleDetails/vehicleDetails";
import UserPage from "./user_page/userPage";
import Header from "./header";
import NavBar from "./navBar";
import Footer from "./footer";
import AddSpaceShip from "./add_spaceship/addSpaceShip"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <NavBar/>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="user/:userId" element={<UserPage />} />
                <Route path="spaceship-details/:spaceshipId" element={<VehicleDetails/>}/>
                <Route path="add-spaceship" element={<AddSpaceShip/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
