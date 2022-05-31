import MainPage from "./mainPage";
import Header from "./header";
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
        <Header/>
        <MainPage/>
    </div>
  );
}

export default App;
