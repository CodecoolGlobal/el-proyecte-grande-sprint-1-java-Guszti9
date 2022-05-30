import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";

function Ship(){
    const [ship, setShip] = React.useState([]);

    const getData=()=>{
        fetch('http://localhost:8080/api/spaceship/0'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin' : 'http://localhost:8080'
                }
            }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setShip(myJson)
            });
    }
    useEffect(()=>{
        getData()
    },[])

  return (
      <div>
        <p>{ship.name}</p>
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Ship />
        </a>
      </header>
    </div>
  );
}

export default App;
