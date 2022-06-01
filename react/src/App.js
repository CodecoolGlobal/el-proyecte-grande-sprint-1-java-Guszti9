import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import Footer from "./footer";
import UserPage from "./userPage";


function Ships() {
    const [ships, setShips] = React.useState([]);

    const getData = () => {
        fetch("http://localhost:8080/api/spaceship/all", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8080'
            }
        }).then(function (response){
            return response.json();
        }).then(function (json){
            console.log(json);
            setShips(json);
        });
    }
        useEffect(() => {
            getData()
        }, [])
    return (
            <div>
                <ul>
                    {ships.map((s) => <li>{s.name}</li>)}
                </ul>
            </div>
        )
}

function Ship() {
    const [ship, setShip] = React.useState([]);

    const getData = () => {
        fetch('http://localhost:8080/api/spaceship/0'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:8080'
                }
            }
        )
            .then(function (response) {
                // console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                // console.log(myJson);
                setShip(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <p>{ship.name}</p>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <UserPage/>
            <Footer/>
        </div>
    );
}

export default App;
